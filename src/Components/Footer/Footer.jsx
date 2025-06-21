import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <p>© {new Date().getFullYear()} DouglasTecch.dev — Todos os direitos reservados.</p>
      <p className={style.text}>Desenvolvido com 💖 por DouglasTecch.dev</p>
    </footer>
  );
}

export default Footer;
