import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import NuevoCliente,{action as nuevoClienteAction} from './pages/NuevoCliente'
import Index, {loader as clientesLoader} from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditarCliente,{loader as editarClienteLoader,action as editarClienteAction} from './pages/EditarCliente'
import {action as eliminarClienteAction} from './components/Cliente'




const router=createBrowserRouter([
// el Outlet me permite inserta un mismo diseño o el layout en todo mi proyecto y el resto de componente los pongo como hijos, para que hereden.
  {path:'/',
element:<Layout/>,
children:[
  {index:true,element:<Index/>,
  loader: clientesLoader,errorElement:<ErrorPage/>
  
  },
  {path:'/clientes/nuevo',
   element:<NuevoCliente/>,
  action:nuevoClienteAction,
  errorElement:<ErrorPage/>},
  
  {
    path: '/clientes/:clienteId/editar',
    element:<EditarCliente/>,
    loader: editarClienteLoader,
    action: editarClienteAction,
    errorElement:<ErrorPage/>

  },
  {
    path: '/clientes/:clienteId/eliminar',
    // element:<EditarCliente/>,
    // loader: editarClienteLoader,
    action: eliminarClienteAction
    // errorElement:<ErrorPage/>

  }

  
]},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
