import { distritos,municipios,paises, departamentos } from "../../services/catalogos/catalogos.services"


const getPaises = async()=>{
    try {
        const response = await paises()
        return response
    } catch (error) {
        console.log(error.message)
    }
}
const getDepartamentos = async(id_pais,params)=>{
    try {
        const response = await departamentos(id_pais,params)
        return response
    } catch (error) {
        console.log(error.message)
    }
}

const getMunicipios = async(id_departamento,params)=>{
    try {
        const response = await municipios(id_departamento,params)
        return response
    } catch (error) {
        console.log(error.message)
    }
}

const getDistritos = async(id_municipio,params)=>{
    try {
        const response = await distritos(id_municipio)
        return response
    } catch (error) {
        console.log(error.message)
    }
}

export{
    getPaises,
    getMunicipios,
    getDistritos,
    getDepartamentos
}