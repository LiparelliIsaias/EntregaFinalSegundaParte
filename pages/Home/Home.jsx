import React from "react";
import Trabajos from "../Home/trabajos";
import FloatingWhatsAppButton from "../../components/BottomWP";


function Home() {
    return (

        <>
            <main class="main_index">


                <div class="SobreNosotrosIndex">
                    <h1>SOBRE NOSOTROS</h1>
                    <p>Nuestro objetivo es brindar un servicio de calidad al menor costo posible.
                        Somos una empresa familiar y transparente con mas de 35 años de experiencia, nos especializamos en la herrería artesanal e industrial, realizamos trabajos personalizados acordes a las necesidades de los clientes y confeccionamos presupuestos SIN COSTO ALGUNO.
                        Además, nos hemos capacitado en la instalación y automatización de portones eléctricos para brindar seguridad y garantía en su uso diario. Por ultimo, ofrecemos servicios de reparaciones domiciliarias SIN turno previo.
                    </p>
                </div>


                <section>
                    <h2>NUESTROS TRABAJOS</h2>
                    <Trabajos />
                </section>


            </main>
                  <FloatingWhatsAppButton />
        </>
    )
}

export default Home;
