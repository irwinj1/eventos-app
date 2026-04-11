import axios from 'axios'

// ==============================
// CONFIG BASE
// ==============================
const API_URL = import.meta.env.VITE_URL_BACK || 'http://localhost:8000/api'

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  // withCredentials: true, // útil si usas cookies (Sanctum, etc.), pero da error de CORS con tokens Bearer y "Allow-Origin: *"
})

// ==============================
// VARIABLES PARA REFRESH TOKEN
// ==============================
let isRefreshing = false
let failedQueue = []

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error)
    else prom.resolve(token)
  })
  failedQueue = []
}

// ==============================
// REQUEST INTERCEPTOR
// ==============================
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

// ==============================
// RESPONSE INTERCEPTOR
// ==============================
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // Manejo de 401 (token expirado)
    if (error.response?.status === 401 && !originalRequest._retry) {

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`
            return api(originalRequest)
          })
          .catch((err) => Promise.reject(err))
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        const refreshToken = localStorage.getItem('refresh_token')

        // PETICIÓN PARA REFRESCAR TOKEN
        const { data } = await axios.post(`${API_URL}/refresh`, {
          refresh_token: refreshToken,
        })

        // Guardar nuevo token
        localStorage.setItem('token', data.token)

        // Actualizar header global
        api.defaults.headers.Authorization = `Bearer ${data.token}`

        // Reintentar peticiones en cola
        processQueue(null, data.token)

        // Reintentar la petición original
        originalRequest.headers.Authorization = `Bearer ${data.token}`
        return api(originalRequest)

      } catch (err) {
        processQueue(err, null)

        // Limpiar sesión
        localStorage.removeItem('token')
        localStorage.removeItem('refresh_token')

        // Redirigir a login
        window.location.href = '/login'

        return Promise.reject(err)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)

// ==============================
// HELPERS (OPCIONAL)
// ==============================
export const setToken = (token) => {
  localStorage.setItem('token', token)
}

export const setRefreshToken = (refreshToken) => {
  localStorage.setItem('refresh_token', refreshToken)
}

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('refresh_token')
  window.location.href = '/login'
}

// ==============================
// EXPORT
// ==============================
export default api