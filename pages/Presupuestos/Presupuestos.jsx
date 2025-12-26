import React, { useState } from "react";
import FloatingWhatsAppButton from "../../components/BottomWP";
import useGetPresupuestos from "../../hooks/useGetPresupuestos";

const Presupuestos = () => {
  const [showPhone, setShowPhone] = useState(false);

  // estados para el simulador
  const [tipo, setTipo] = useState("Rejas");
  const [metros2, setMetros2] = useState("");

  // hook de lógica
  const { resultado, loading, error, calcularPresupuesto } = useGetPresupuestos();

  const togglePhone = () => {
    setShowPhone(!showPhone);
  };

  const handleSimulador = (e) => {
    e.preventDefault();
    calcularPresupuesto(tipo, metros2);
  };

  return (
    <>
      <main className="mainPresupuestos">
        <div className="Presupuestos">
          {/* Formulario de contacto */}
          <form className="responsive-form">
            <h2>Presupuestos</h2>
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" placeholder="Ingrese tu nombre" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" required />
            </div>
            <div>
              <label htmlFor="telefono">Teléfono:</label>
              <input type="tel" id="telefono" name="telefono" placeholder="Ingresa tu número de teléfono" required />
            </div>
            <div>
              <label htmlFor="descripcion">Descripción del Trabajo:</label>
              <textarea id="descripcion" name="descripcion" rows="5" placeholder="Describe el trabajo que necesitas realizar" required></textarea>
            </div>
            <div>
              <label htmlFor="imagenes">Adjuntar imágenes referenciales:</label>
              <input type="file" id="imagenes" name="imagenes[]" accept="image/*" multiple />
            </div>
            <button type="submit" className="submit-button">Solicitar Presupuesto</button>
          </form>

          {/* Botón de Emergencia */}
          <div>
            <button onClick={togglePhone}>¿Urgencia? Contacta al instante</button>
            {showPhone && (
              <div id="emergency-phone">
                <p>
                  Llama al: <a href="tel:+541234567890">+54 1154634024</a>
                </p>
              </div>
            )}
          </div>

          {/* 👇 Simulador de presupuestos */}
          <div className="simulador">
            <h2 className="tituloPalpito" >SIMULADOR DE PRESUPUESTO ESTANDAR</h2>
            <form onSubmit={handleSimulador}>
              <label>
                Tipo:
                <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                  <option value="Rejas">REJAS</option>
                  <option value="Techos">TECHOS</option>
                </select>
              </label>

              <input
                type="number"
                placeholder="Metros cuadrados"
                value={metros2}
                onChange={(e) => setMetros2(e.target.value)}
              />

              <button type="submit">Calcular</button>
            </form>

            {loading && <p>Calculando...</p>}
            {error && <p>Error: {error.message}</p>}
            {resultado && (
              <p>
                Tipo: {tipo} <br />
                Metros²: {resultado.metros2} <br />
                Precio por m²: ${resultado.precioM2} <br />
                Total estimado: ${resultado.total}
              </p>
            )}
          </div>
        </div>
      </main>
      <FloatingWhatsAppButton />
    </>
  );
};

export default Presupuestos;
