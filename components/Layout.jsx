import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Headers from "../pages/Header";
import Footer from "../pages/Footer"
import PreguntasFrecuentes from "../pages/PreguntasFrecuentes";
import Presupuestos from "../pages/Presupuestos";
import Contacto from "../pages/Contacto";

function Layout() {

    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/">Home </NavLink>
                    <NavLink to="/PreguntasFrecuentes">PreguntasFrecuentes </NavLink>
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