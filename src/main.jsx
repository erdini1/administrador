import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente'
//debo ponerle otro nombre al loader porque a meddida que creza la app voy a tener varios que van a chocar
import Index, { loader as clientesLoader } from "./pages/Index"




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
        loader: clientesLoader
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction
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
