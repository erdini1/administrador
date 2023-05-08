import { useLoaderData } from "react-router-dom";
import { obtenerClientes } from "../data/clientes";
import Cliente from "../components/Cliente";


//Es como un state y siempre tiene que retornar algo. Para retornar se utiliza un hook
// El loader se exporta al main, desde el main lo cargo como loader en la ruta "/" y luego vuelve aca para utilizarse
export function loader() {
  const clientes = obtenerClientes()

  return clientes
}

function Index() {

  // con el useLoadeerData traigo el valor de la función loader
  const clientes = useLoaderData()

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className='mt-3 font-bold'>Administra tus clientes</p>
      {clientes.length ? (
        <table className="w-full bg-white mt-5 table-auto">

          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <Cliente
                cliente={cliente}
                key={cliente.id}
              />
            ))}
          </tbody>

        </table>

      ) : (
        <p className="text-center mt-10">No hay Clientes</p>
      )}
    </>
  )
}

export default Index