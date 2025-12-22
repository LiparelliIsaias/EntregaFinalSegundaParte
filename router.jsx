import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes.jsx";
import Contacto from "./pages/Contacto.jsx"
import Presupuestos from "./pages/Presupuestos.jsx"




export const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,

        children: [
            {
                index: true,
                element: <Home />
            },
            
            {
                path: "PreguntasFrecuentes",
                element: <PreguntasFrecuentes />
            },
            {
                path: "Contacto",
                element: <Contacto />
            },
            {
                path: "Presupuestos",
                element: <Presupuestos/>
            },
            {
                //Se puede inventar una pag para este error.
                path: "*",
                element: <div>
                    <h1>404</h1>
                    <p>Pagina no encontrada</p>
                </div>
            }
        ]
    }
])
