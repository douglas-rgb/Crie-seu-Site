import React from "react";
import style from "./About.module.css";
import aboutImage from "../../assets/image-4.png";

function About() {
  return (
    <section className={style.about} id="about">
      <div className={style.aboutContainer}>
        <div className={style.content}>
          <h2>Sobre a Plataforma</h2>
          <p>
            Nossa missão é tornar o aprendizado de desenvolvimento web acessível
            para todos. Aqui, você pode visualizar um site completo e criar o seu
            próprio do zero, utilizando HTML, CSS e JavaScript.
          </p>
          <p>
            Seja você iniciante ou com experiência, essa plataforma vai te ajudar
            a praticar de forma simples e eficaz.
          </p>
        </div>

        <div className={style.imageContainer}>
          <img src={aboutImage} alt="Sobre o projeto" />
        </div>
      </div>
    </section>
  );
}

export default About;

