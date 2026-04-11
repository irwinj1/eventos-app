import api from "../../../utils/db/api"

const categorias = async()=>{
    try {
        const response = await api.get('/catalogos/categorias')
      return response.data.data
    } catch (error) {
        console.log(error.message)
    }
}

const crearCategoria = async(data)=>{
    try {
        const response = await api.post('/catalogos/categorias',data)
        return response.data
    } catch (error) {
        console.log(error.message)
    }
}

const eliminarCategoria = async(id)=>{
    try {
        const response = await api.delete('/catalogos/categorias/'+id)
        return response.data
    } catch (error) {
        console.log(error.message)
    }
}
export {
    categorias,
    crearCategoria,
    eliminarCategoria
}