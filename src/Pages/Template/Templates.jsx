import React from "react";
import style from "./Templates.module.css";

const templates = [
  {
    title: "Landing Page Simples",
    description: "Um modelo básico com header, conteúdo e footer.",
    link: "/templates/landing-page/index.html",
  },
  {
    title: "Portfólio Pessoal",
    description: "Template de portfólio com imagem e seções informativas.",
    link: "/templates/portfolio/index.html",
  },
  {
    title: "Página de Serviços",
    description: "Layout para empresas mostrarem seus serviços.",
    link: "/templates/servicos/index.html",
  },
];

function Templates() {
  return (
    <section className={style.templates} id="templates">
      <div className={style.container}>
        <h2>Templates para Praticar</h2>
        <p>Escolha um modelo e tente replicar com seu próprio código!</p>
        <div className={style.cards}>
          {templates.map((template, index) => (
            <div className={style.card} key={index}>
              <h3>{template.title}</h3>
              <p>{template.description}</p>
              <a href={template.link} target="_blank" rel="noopener noreferrer">
                Visualizar Template
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Templates;


