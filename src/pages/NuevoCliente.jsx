import { useNavigate, Form, useActionData } from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from "../components/Error"

//debe se asincrona porque puede ser algo que tarde en traer
//El formdate va como metodo es decir con () por que esta en el prototype 
export async function action({request}) {

  const formData = await request.formData()
  const datos = Object.fromEntries(formData)

  const errores = [];
  //Validación 
  if(Object.values(datos).includes("")){
    errores.push("Todos los campos son obligatorios")
  }

  if(Object.keys(errores).length){
    return errores
  }

  //Retornar datos si hay errores
  console.log(errores)

  return {ok: true}
}

const NuevoCliente = () => {

  const errores = useActionData()
  const navigate = useNavigate()


  console.log(errores)
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Nuevo cliente</h1>
      <p className='mt-3'>Completa todos los campos para registrar un nuevo cliente</p>

      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form
          method="post"
        >
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Registrar Cliente"
          />
        </Form>
      </div >
    </>
  )
}

export default NuevoCliente