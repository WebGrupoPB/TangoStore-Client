import React from 'react'
/* import ReactDOM from 'react-dom/client' */
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Empleos from './routes/Empleos.jsx'
import Prueba from './routes/Prueba.jsx'
import Menu from './routes/Menu.jsx'
import Error from './routes/Error.jsx'
import MenuPDF from './routes/MenuPDF.jsx'
import './index.css'

import * as ReactDOM from "react-dom/client";
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
 
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Home />,
     errorElement: <Error />,
   },
   {
    path: "/empleos",
    element: <Empleos />,
  },
  {
    path: "/productos",
    element: <Menu />,
  },
  {
    path: "/menu",
    element: <MenuPDF />,
  },

 ]); 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
     <RouterProvider router={router} />
   </React.StrictMode>
 );
