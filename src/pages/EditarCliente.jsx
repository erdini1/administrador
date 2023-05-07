import { obtenerCliente } from "../data/clientes"

export async function loader({params}){
    const cliente = await obtenerCliente(params.clienteId)
    //Esto crea una repsuesta de error que va a deneter la ejecución del codigo
    //aparte vincule el error page para que el error este dentro del formato
    if(Object.values(cliente).length === 0){
        throw new Response("", {
            status: 404,
            statusText: "Cliente no existente"
        })
    }
    console.log(cliente) 
    return cliente
}

function EditarCliente() {



  return (
    <div>
        Editar Cliente
    </div>
  )
}

export default EditarCliente