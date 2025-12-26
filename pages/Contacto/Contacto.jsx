import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FloatingWhatsAppButton from "../../components/BottomWP";

const Contacto = () => {
  return (
    <>
    <main className="main_contacto">
      <section className="section_contacto card">
        <div className="contact_block">
          <h3>
            <FaMapMarkerAlt className="icon" /> UBICACIÓN
          </h3>
          <p>Av. Siempre Viva 123, CABA, Buenos Aires</p>
        </div>

        <div className="contact_block">
          <h3>Redes Sociales</h3>
          <ul>
            <li>
              <a
                href="https://facebook.com/tu_usuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="icon" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/tu_usuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/tu_usuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="icon" /> Twitter
              </a>
            </li>
          </ul>
        </div>

        <div className="contact_block">
          <h3>Correo Electrónico</h3>
          <p>
            <a href="mailto:isaiasyairliparelli@gmail.com">
              <FaEnvelope className="icon" /> isaiasyairliparelli@gmail.com
            </a>
          </p>

          <h3>Teléfono</h3>
          <p>
            <a href="tel:+5491134567890">
              <FaPhoneAlt className="icon" /> +54 9 11 3456-7890
            </a>
          </p>

          <h3>WhatsApp</h3>
          <p>
            <a
              href="https://wa.me/5491134567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="icon" /> +54 9 11 3456-7890
            </a>
          </p>
        </div>
      </section>

      <section className="section_mapa card">
        <h2>Nuestra Ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.16124553058!2d-58.3816532!3d-34.6037382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac332034bff%3A0xbbb8deae066cf76c!2sObelisco!5e0!3m2!1ses!2sar!4v1691109134573!5m2!1ses!2sar"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Mapa Ubicación"
        ></iframe>
      </section>
    </main>

      <FloatingWhatsAppButton />

      </>
  );
};

export default Contacto;
