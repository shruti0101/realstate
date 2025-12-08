// WhatsAppChat.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Whatsapp = () => {
  return (

    <>


       <a
     href="https://wa.me/+919810759498"
      className="whatsapp-float animate-bounce"

      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Promozione Branding"
    >
      <FaWhatsapp size={31} />
    </a>
    <div className="">


       <a
          href="tel:+919810759498"
          className="call-float animate-bounce"
          aria-label="Call Promozione Branding"
        >
          <FaPhoneAlt className="" size={29} />
        </a>
    </div>
      
    </>
 




  );
};

export default Whatsapp;
