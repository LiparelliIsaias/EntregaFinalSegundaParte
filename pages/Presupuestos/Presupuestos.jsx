import React, { useState } from "react";

const Presupuestos = () => {
  const [showPhone, setShowPhone] = useState(false);

  const togglePhone = () => {
    setShowPhone(!showPhone);
  };

  return (
    <main className="mainPresupuestos">
      <div className="Presupuestos">
        <form
          action="#"
          method="post"
          className="responsive-form"
          encType="multipart/form-data"
        >
          <h2>Presupuestos</h2>

          {/* Nombre y Apellido */}
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingrese tu nombre"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              required
            />
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Ingresa tu número de teléfono"
              required
            />
          </div>

          {/* Descripción del Trabajo */}
          <div>
            <label htmlFor="descripcion">Descripción del Trabajo:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows="5"
              placeholder="Describe el trabajo que necesitas realizar"
              required
            ></textarea>
          </div>

          {/* Adjuntar Imágenes */}
          <div>
            <label htmlFor="imagenes">Adjuntar imágenes referenciales:</label>
            <input
              type="file"
              id="imagenes"
              name="imagenes[]"
              accept="image/*"
              multiple
            />
          </div>

          {/* Botón para Enviar */}
          <button type="submit" className="submit-button">
            Solicitar Presupuesto
          </button>
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
      </div>
    </main>
  );
};

export default Presupuestos;
