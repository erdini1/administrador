import { useLoaderData } from "react-router-dom";

//Es como un state y siempre tiene que retornar algo. Para retornar se utiliza un hook
// El loader se exporta al main, desde el main lo cargo como loader en la ruta "/" y luego vuelve aca para utilizarse
export function loader(){
  const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 3,
        nombre: 'Josue',
        telefono: 31983913,
        email: "josue@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 5,
        nombre: 'Pedro',
        telefono: 1398198938,
        email: "pedro@juan.com",
        empresa: 'Codigo Con Juan'
    },
];

  return clientes;
}

function Index() {

  // con el useLoadeerData traigo el valor de la función loader
  const clientes = useLoaderData()

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1> 
      <p className='mt-3'>Administra tus clientes</p>
    </>
  )
}

export default Index