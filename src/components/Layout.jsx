import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div>
        <h1 className="text-6xl font-bold">CRM - React</h1>

        {/* Lo que este debajo de este outltet va a renderizarlo*/}
        <Outlet/>
    </div>
  )
}

export default Layout