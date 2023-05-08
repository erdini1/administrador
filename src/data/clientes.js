//es async xq voy a utilizar un fetch. 
// en este fetch no tuve que colocarle el method porque el defecto es GET
export async function obtenerClientes(){
    
    // ESTO VA A HACER FETCH A LA VARIABLE DE ENTORNO. El import.meta.env sirve para importar la variable
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerCliente(id){
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

//Agregar un nuevo cliente. Debo indicarle el method
export async function agregarCliente(datos){
  try{
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    })
    await respuesta.json
  } catch(error){
    console.log(error)
  }
}

export async function actualizarCliente(id, datos){
  try{
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    })
    await respuesta.json
  } catch(error){
    console.log(error)
  }
}

export async function eliminarCliente(id){
  try{
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "DELETE",
    })
    await respuesta.json
  } catch(error){
    console.log(error)
  }
}