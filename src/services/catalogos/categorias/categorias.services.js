const url = import.meta.env.VITE_URL_BACK

const categorias = async()=>{
    try {
        const response = await fetch(url+'/catalogos/categorias')
      const data = await response.json() 
      return data.data
    } catch (error) {
        console.log(error.message)
    }
}

const crearCategoria = async(data)=>{
    try {
        const response = await fetch(url+'/catalogos/categorias',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const res = await response.json() 
        return res.data
    } catch (error) {
        console.log(error.message)
    }
}
export {
    categorias,
    crearCategoria
}