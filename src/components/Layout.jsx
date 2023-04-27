import { Outlet, Link, useLocation } from "react-router-dom"

function Layout() {

  const location = useLocation()
  // console.log(location)



  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>
        

        <nav className="mt-10 ">
          <Link
            to="/"
            // Puedo agregarle template string para cuando este en cliente o nuevo
            className={`${location.pathname === "/" ? "text-blue-300" : "text-white"} text-2xl block mt-2 hover:text-blue-300`}
          >Clientes</Link>
          <Link
            to="/clientes/nuevo"
            className={`${location.pathname === "/clientes/nuevo" ? "text-blue-300" : "text-white"} text-2xl block mt-2 hover:text-blue-300`}
          >Nuevo Cliente</Link>
        </nav>
        
      </aside>

      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout

/* 
CSS
md:w-1/4 - Quiere decir que esto que tome una de 4 columnas, es decir se va a dividir la pantalla en 4 y y vamos a tomar una de esas 4 dejando el resto para el outlet

overflow-scroll - quiere decir que la parte derecha va a scrolear y la parte izquierda no

*/