//es async xq voy a utilizar un fetch
export async function obtenerClientes(){
    
    // ESTO VA A HACER FETCH A LA VARIABLE DE ENTORNO. El import.meta.env sirve para importar la variable
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    return resultado
}