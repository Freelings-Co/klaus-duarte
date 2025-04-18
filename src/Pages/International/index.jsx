// ExperienciaInternacional.jsx
import React, { useState, useEffect } from 'react';
import './style.css';

const paises = [
  {
    id: 1,
    nome: "Brasil",
    cidade: "Goiânia/São Paulo",
    descricao: "Berço criativo e polo de projetos como IDANCETY e produções com Anitta, Ivete Sangalo e grandes nomes da TV brasileira.",
    anos: "1985-2007, 2012-Presente",
    cor: "#FFD700"
  },
  {
    id: 2,
    nome: "Turquia",
    cidade: "Istambul",
    descricao: "Fundação da Brasilin, hub criativo conectando talentos brasileiros ao mercado euro-asiático, produzindo para Fashion TV, Coca-Cola e grandes marcas.",
    anos: "2007-2009",
    cor: "#FFD700"
  },
  {
    id: 3,
    nome: "Espanha",
    cidade: "Ilhas Canárias",
    descricao: "Trabalho em resorts de luxo e aperfeiçoamento do espanhol, consolidando a carreira internacional no conceito 'All Inclusive'.",
    anos: "2009-2010",
    cor: "#FFD700"
  },
  {
    id: 4,
    nome: "Suíça",
    cidade: "Genebra",
    descricao: "Coreografia do Miss Suíça e participação em eventos internacionais de grande porte.",
    anos: "2010-2011",
    cor: "#FFD700"
  },
  {
    id: 5,
    nome: "Alemanha",
    cidade: "Munique",
    descricao: "Atuação na abertura do Biathlon nos Jogos Olímpicos de Inverno, marcando presença no cenário esportivo internacional.",
    anos: "2011-2012",
    cor: "#FFD700"
  },
  {
    id: 6,
    nome: "Costa Rica",
    cidade: "San José",
    descricao: "Fase atual: Internacionalização do projeto IDANCETY, criando um polo criativo de produção, formação e exportação artística.",
    anos: "2025-Presente",
    cor: "#FFD700"
  }
];

const ExperienciaInternacional = () => {
  const [paisSelecionado, setPaisSelecionado] = useState(null);
  const [animarMapa, setAnimarMapa] = useState(false);

  useEffect(() => {
    // Animar mapa quando componente montar
    setAnimarMapa(true);
    
    // Função para verificar quando o elemento entra na viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimarMapa(true);
        }
      },
      { threshold: 0.3 }
    );
    
    const section = document.querySelector('.experiencia-internacional');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handlePaisClick = (pais) => {
    setPaisSelecionado(pais);
  };

  return (
    <section className="experiencia-internacional" id="experiencia">
      <div className="container">
        <h2 className="section-title">Experiência Internacional</h2>
        <p className="section-subtitle">Uma jornada artística pelo mundo</p>
        
        <div className="mapa-container">
          <div className={`mapa-mundial ${animarMapa ? 'animar' : ''}`}>
            {paises.map((pais, index) => (
              <div 
                key={pais.id}
                className={`pais-pin ${paisSelecionado?.id === pais.id ? 'ativo' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  left: getPosicaoPais(pais.nome).x,
                  top: getPosicaoPais(pais.nome).y
                }}
                onClick={() => handlePaisClick(pais)}
              >
                <span className="pin-dot"></span>
                <span className="pin-label">{pais.nome}</span>
              </div>
            ))}
          </div>
          
          {paisSelecionado && (
            <div className="pais-detalhes">
              <h3>{paisSelecionado.nome} <span className="pais-anos">{paisSelecionado.anos}</span></h3>
              <h4>{paisSelecionado.cidade}</h4>
              <p>{paisSelecionado.descricao}</p>
            </div>
          )}
        </div>
        
        <div className="experiencia-sumario">
          <div className="experiencia-dados">
            <div className="dado">
              <span className="numero">6</span>
              <span className="texto">Países</span>
            </div>
            <div className="dado">
              <span className="numero">5</span>
              <span className="texto">Idiomas</span>
            </div>
            <div className="dado">
              <span className="numero">20+</span>
              <span className="texto">Anos de carreira internacional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Função auxiliar para posicionar os pins no mapa
function getPosicaoPais(pais) {
  const posicoes = {
    "Brasil": { x: "28%", y: "65%" },
    "Turquia": { x: "55%", y: "42%" },
    "Espanha": { x: "47%", y: "40%" },
    "Suíça": { x: "50%", y: "37%" },
    "Alemanha": { x: "52%", y: "35%" },
    "Costa Rica": { x: "22%", y: "55%" }
  };
  
  return posicoes[pais] || { x: "50%", y: "50%" };
}

export default ExperienciaInternacional;