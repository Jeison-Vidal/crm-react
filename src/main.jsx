import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import NuevoCliente from './pages/NuevoCliente'
import Index from './pages/Index'



const router=createBrowserRouter([
// el Outlet me permite inserta un mismo diseño o el layout en todo mi proyecto y el resto de componente los pongo como hijos, para que hereden.
  {path:'/',
element:<Layout/>,
children:[
  {index:true,element:<Index/>
  
  },
  {path:'/clientes/nuevo',
   element:<NuevoCliente/>}

  
]},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
