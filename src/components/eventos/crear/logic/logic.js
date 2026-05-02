import { useEffect, useState } from "react";
import { getPaises,getDepartamentos,getDistritos,getMunicipios } from "../../../../utils/share/catalogos";

export function EventoLogic() {
 try {
      const [paises, setPaises] = useState([]);
      const [departamentos, setDepartamentos] = useState([]);
      const [municipios, setMunicipios] = useState([]);
      const [distritos, setDistritos] = useState([]);
    
      const country = async() => {
        const response = await getPaises();
        setPaises(response);
      }
    
    const handlePaisChange = async(e) => {
        const deparment = await getDepartamentos(e.target.value);
        console.log(deparment);
        
        setDepartamentos(deparment.data);
    };
    
      // const handleDepartamentoChange = (e) => {
      //   getMunicipios(e.target.value);
      // };
    
      // const handleMunicipioChange = (e) => {
      //   getDistritos(e.target.value);
      // };
    
    return{
        country,
        handlePaisChange,
        paises,
        departamentos,
        municipios,
        distritos
    }
 } catch (error) {
    console.log(error.message)
 }   
}