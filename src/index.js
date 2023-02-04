import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//-1 importar linea 6
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Error from './routes/Error';


//-2 router= a llamamos a reateBrowserRouter, esta funcion espera una array([])
const router = createBrowserRouter([
  //abrimos los objetos, aca se define como se configuran las rutas
  {
    //la propiedad path para expecificar cual es la url que vamos a activar, con '/' , es la url basica, el Home
    path: '/',
    //propiedad element para especificar el componente que se va cargar
    element: <Home />,
    //con la propiedad errorElement y se importa <Error />
    errorElement: <Error />,
    //children es una propiedad para crear rutas hijas en este caso hija de Home
    children:[
      {
        /*contact es una ruta fija y contactid con los dos puntos es una ruta dinamica */
        path: 'contact/:contactid',
        //
        element: <Contact />
      }
    ]
  },
  {
    path: '/about',
    element: <About />,
  },
  // {
  //   path: '/contact',
  //   element: <Contact />,
  // }
]);

 //inyectamos las rutas al componente RouterProvider, nos pide un prop se que llama router y aca se pone la variable router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

