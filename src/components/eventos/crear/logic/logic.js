import { useEffect, useState } from "react";
import { getPaises,getDepartamentos,getDistritos,getMunicipios } from "../../../../utils/share/catalogos";
import { categorias } from "../../../../services/catalogos/categorias/categorias.services";
export function EventoLogic() {
 try {
      const [paises, setPaises] = useState([]);
      const [departamentos, setDepartamentos] = useState([]);
      const [municipios, setMunicipios] = useState([]);
      const [distritos, setDistritos] = useState([]);
      const [isDepartamento, setIsDepartamento] = useState(true);
      const [isMunicipio,setIsMunicipio] = useState(true);
      const [categoriass,setCategorias] = useState([])
      const country = async() => {
        const response = await getPaises();
        setPaises(response);
      }
    
    const handlePaisChange = async(e) => {
        const deparment = await getDepartamentos(e.target.value);        
        setDepartamentos(deparment.data);
    };
    
      const handleDepartamentoChange = async(e) => {
        const response = await getMunicipios(e.target.value);
        setMunicipios(response.data);
        setIsDepartamento(false)
      };
    
      const handleMunicipioChange = async(e) => {
        const response = await getDistritos(e.target.value);
        setDistritos(response.data)
        setIsMunicipio(false)
      };
      const getCategorias = async()=>{
        try {
          const response = await categorias(1)
          console.log(response);
          setCategorias(response.data)
        } catch (error) {
          
        }
      }
    return{
        country,
        handlePaisChange,
        paises,
        departamentos,
        municipios,
        distritos,
        isDepartamento,
        handleDepartamentoChange,
        handleMunicipioChange,
        isMunicipio,
        categoriass,
        getCategorias
    }
 } catch (error) {
    console.log(error.message)
 }   
}