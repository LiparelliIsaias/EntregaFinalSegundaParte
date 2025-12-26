import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Headers from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer"
import PreguntasFrecuentes from "../pages/Preguntas Frecuentes/PreguntasFrecuentes";
import Presupuestos from "../pages/Presupuestos/Presupuestos";
import Contacto from "../pages/Contacto/Contacto";

function Layout() {

    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/">Inicio </NavLink>
                    <NavLink to="/PreguntasFrecuentes">Preguntas Frecuentes </NavLink>
                    <NavLink to="/Presupuestos">Presupuestos </NavLink>
                    <NavLink to="/Contacto">Contacto </NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )

}

export default Layout;