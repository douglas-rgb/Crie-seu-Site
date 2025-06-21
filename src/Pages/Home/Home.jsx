import React, { useEffect, useState } from "react";
import style from "./Home.module.css";

import image1 from '../../assets/image-1.png';
import image2 from '../../assets/image-2.png';
import image3 from '../../assets/image-3.png';
import image4 from '../../assets/image-4.png';

const images = [image1, image2, image3, image4];


function Home() {
  const abrirEditor = () => {
    window.open("/Editor-de-Código/index.html", "_blank", "noopener,noreferrer");
  };

  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setLoaded(false); // esconde antes de trocar
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className={style.home} id="home">
      <div className={style.container}>
        <div className={style.heroContent}>
          <h2>Crie seu site do zero</h2>
          <p>Aprenda a desenvolver um site do zero com HTML, CSS e JavaScript.</p>
          <p>Veja os exemplos abaixo e comece agora mesmo a codar do seu jeito.</p>
          <button onClick={abrirEditor}>Desenvolva seu próprio site</button>
        </div>

        <div className={style.heroImage}>
          <img
            src={images[index]}
            alt="imagem de destaque"
            onLoad={() => setLoaded(true)}
            className={loaded ? style.show : ""}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;

