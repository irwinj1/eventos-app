import api from "../../utils/db/api"

const getEventos = async(page = 1, limit = 10)=>{
    try {
        const response = await api.get(`/eventos?page=${page}&limit=${limit}`)
        return response.data
    } catch (error) {
        console.log(error.message)
    }
}
const crearEvento = async(data)=>{
    try {
        const response = await api.post('/eventos', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response.data
    } catch (error) {
        console.log(error.message)
    }
}

export {
    crearEvento,
    getEventos
}