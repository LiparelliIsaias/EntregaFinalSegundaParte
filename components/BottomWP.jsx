import React from "react";

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491123456789?text=Hola%20quiero%20más%20información"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width="50"
        height="50"
      />
    </a>
  );
};

export default FloatingWhatsAppButton;
