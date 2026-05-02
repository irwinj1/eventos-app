import api from "../../utils/db/api"

const paises = async()=>{
    try {
        const response = await api.get('/catalogos/pais')
        return response.data.data
    } catch (error) {
        console.log(error.message)
    }
}
const departamentos = async(id_pais)=>{
    try {
        const response = await api.get('/catalogos/departamentos?id_pais='+id_pais)
        return response.data
    } catch (error) {
        console.log(error.message)
    }
}
const municipios = async(id_departamento,params)=>{
    try {
        const response = await api.get('/catalogos/municipios',
            {
                params:{
                id_departamento,
                ...params
            }
        })
        return response.data.data
    } catch (error) {
        console.log(error.message)
    }
}

const distritos = async(id_municipio)=>{
    try {
        const response = await api.get('/catalogos/distritos?id_municipio='+id_municipio)
        return response.data.data
    } catch (error) {
        console.log(error.message)
    }
}


export{
    paises,
    municipios,
    distritos,
    departamentos
}