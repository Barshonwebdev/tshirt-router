import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from './components/layout/Mainlayout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Orders from './components/orders/Orders';
import Contact from './contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('tshirts.json')
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/contacts",
        element: <Contact></Contact>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
