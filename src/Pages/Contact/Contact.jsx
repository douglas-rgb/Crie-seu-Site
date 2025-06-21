import React from "react";
import style from "./Contact.module.css";

function Contact() {
  const whatsappLink = "https://wa.me/55SEUNUMERO?text=Ol%C3%A1!%20Quero%20criar%20meu%20site%20de%20teste.";

  return (
    <section className={style.contact} id="contact">
      <div className={style.container}>
        <h2>Fale Conosco</h2>
        <p>Está com dúvidas ou quer começar seu projeto? Fale com a gente no WhatsApp!</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={style.button}>
          Enviar Mensagem
        </a>
      </div>
    </section>
  );
}

export default Contact;
