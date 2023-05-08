import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorPage from './components/ErrorPage'
import EditarCliente, { loader as editarClienteLoader, action as editarClienteAction } from './pages/EditarCliente'
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente'
//debo ponerle otro nombre al loader porque a meddida que creza la app voy a tener varios que van a chocar
import Index, { loader as clientesLoader } from "./pages/Index"
import { action as eliminarClienteAction } from "./components/Cliente"




//CREO VARIABLE CON LAS URLS
const router = createBrowserRouter([
  /* el children es lo que va a renderizar despues del outlet */
  {
    path: "/",
    element: <Layout />,
    children: [
      { //esto es para que el path "/" exista
        index: true,
        element: <Index />,
        loader: clientesLoader,
        // de esta forma creo una pantalla personalizada
        errorElement: <ErrorPage />
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: "/clientes/:clienteId/editar",
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: "/clientes/:clienteId/eliminar",
        action: eliminarClienteAction
      }
    ]
  },
  {

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>,
)
