import React from "react";

function PreguntasFrecuentes() {
    return (
        
        <main className="faq-main py-5 tamañoHeader">

            <div className="container">

                <h1 className="mainPreguntasFrecuentes text-center mb-4">
                    Preguntas Frecuentes
                </h1>

                <div className="accordion" id="faqAccordion">

                    {/* Pregunta 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq1Header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq1"
                                aria-expanded="false"
                                aria-controls="faq1"
                            >
                                ¿Qué materiales se utilizan comúnmente en trabajos de herrería?
                            </button>
                        </h2>
                        <div
                            id="faq1"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq1Header"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                En trabajos de herrería se utilizan materiales como hierro,
                                acero inoxidable, aluminio y otros metales dependiendo del
                                proyecto.
                            </div>
                        </div>
                    </div>

                    {/* Pregunta 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq2Header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq2"
                                aria-expanded="false"
                                aria-controls="faq2"
                            >
                                ¿Ofrecen trabajos personalizados?
                            </button>
                        </h2>
                        <div
                            id="faq2"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq2Header"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Sí, realizamos trabajos personalizados adaptados a las
                                necesidades y preferencias de cada cliente.
                            </div>
                        </div>
                    </div>

                    {/* Pregunta 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq3Header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq3"
                                aria-expanded="false"
                                aria-controls="faq3"
                            >
                                ¿Los presupuestos tienen un costo adicional?
                            </button>
                        </h2>
                        <div
                            id="faq3"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq3Header"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                No, los presupuestos se realizan sin costo.
                            </div>
                        </div>
                    </div>


                    {/* Pregunta 4 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq4Header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq4"
                                aria-expanded="false"
                                aria-controls="faq4"
                            >
                                ¿Realizan reparaciones domiciliarias?
                            </button>
                        </h2>
                        <div
                            id="faq4"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq4Header"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Sí, realizamos reparaciones domiciliarias sin necesidad de turno previo.
                            </div>
                        </div>
                    </div>

                    {/* Pregunta 5 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq5Header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq5"
                                aria-expanded="false"
                                aria-controls="faq5"
                            >
                                Necesito realizar un trabajo a medida pero no tengo muy en claro lo que quiero, ¿me pueden ayudar?
                            </button>
                        </h2>
                        <div
                            id="faq5"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq5Header"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Sí, podemos asesorarte en el diseño y la elección de materiales para que el trabajo se ajuste a tus necesidades y gustos.
                            </div>
                        </div>
                    </div>

                    {/* Pregunta 6 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq6Header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq6"
                                aria-expanded="false"
                                aria-controls="faq6"
                            >
                                ¿Qué medios de pago aceptan?
                            </button>
                        </h2>
                        <div
                            id="faq6"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq6Header"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Aceptamos efectivo, transferencias bancarias y tarjetas de crédito y débito.
                            </div>
                        </div>
                    </div>

                    {/* Pregunta 7 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq7Header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq7"
                                aria-expanded="false"
                                aria-controls="faq7"
                            >
                                ¿Cuánto tiempo tardan en realizar un trabajo?
                            </button>
                        </h2>
                        <div
                            id="faq7"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq7Header"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Los tiempos de entrega varían según el tipo de trabajo y la carga de trabajo actual. Te informaremos sobre el tiempo estimado al momento de realizar el presupuesto.
                            </div>
                        </div>
                    </div>

                    {/* Pregunta 8 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq8Header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq8"
                                aria-expanded="false"
                                aria-controls="faq8"
                            >
                                ¿Realizan trabajos de automatización de portones?
                            </button>
                        </h2>
                        <div
                            id="faq8"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq8Header"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Sí, contamos con experiencia en la instalación y automatización de portones eléctricos, garantizando seguridad y funcionalidad. Además, todos nuestros trabajos cuentan con garantía de 1 año.
                            </div>
                        </div>
                    </div>

                    {/* Pregunta 9 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq9Header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq9"
                                aria-expanded="false"
                                aria-controls="faq9"
                            >
                                Necesito realizar una reparación pero no tengo un buen acceso al lugar de trabajo.
                            </button>
                        </h2>
                        <div
                            id="faq9"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq9Header"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                No se preocupe, contamos con herramientas y equipos adecuados para realizar trabajos en lugares de difícil acceso. Nuestro equipo está capacitado para manejar situaciones complicadas y garantizar un trabajo seguro y eficiente.
                            </div>
                        </div>
                    </div>

                    {/* Pregunta 10 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq10Header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#faq10"
                                aria-expanded="false"
                                aria-controls="faq10"
                            >
                                ¿Qué días y horarios trabajan?
                            </button>
                        </h2>
                        <div
                            id="faq10"
                            className="accordion-collapse collapse"
                            aria-labelledby="faq10Header"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Nosotros trabajamos de lunes a viernes de 8:00 a 18:00 y los sábados de 8:00 a 13:00. Si necesitas un trabajo urgente fuera de estos horarios, no dudes en contactarnos y haremos lo posible por ayudarte.
                            </div>
                        </div>
                    </div>

                </div>






                {/* Formulario */}
                <div className="mt-5 formularioPreguntasFrecuentes">
                    <h2 className="text-center mb-4">Consulta Adicional</h2>
                    <form
                        className="mx-auto"
                        style={{ maxWidth: "600px" }}
                        method="POST"
                        action="mailto:tucorreo@dominio.com"
                        encType="text/plain"
                    >
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Tu Correo Electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="correo@ejemplo.com"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="query" className="form-label">
                                Tu Consulta
                            </label>
                            <textarea
                                id="query"
                                name="query"
                                className="form-control"
                                rows="5"
                                placeholder="Escribe tu consulta aquí..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-lg btn-primary d-block mx-auto buttonColor"
                        >
                            Enviar Consulta
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default PreguntasFrecuentes;
