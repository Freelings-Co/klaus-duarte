
import React, { useState, useEffect } from 'react';
import './style.css';
import MapaMundi from '../../assets/mapa.webp'
import BrazilFlag from '../../assets/brazil.webp'
import TurquiaFlag from '../../assets/turquia.webp'
import EspanhaFlag from '../../assets/espanha.webp'
import SuicaFlag from '../../assets/suicaflag.webp'
import AlemanhaFlag from '../../assets/alemanha.webp'
import CostaRicaFlag from '../../assets/costarica.webp'
import AustriaFlag from '../../assets/austria.webp'

const imagensPaises = {
  Brasil: BrazilFlag,
  Turquia: TurquiaFlag,
  Espanha: EspanhaFlag,
  "Suíça": SuicaFlag,
  Alemanha: AlemanhaFlag,
  "Costa Rica": CostaRicaFlag,
  Austria: AustriaFlag
};

const paises = [
  {
    id: 1,
    nome: "Brasil",
    cidade: "Goiânia/São Paulo",
    descricao: "Berço criativo e polo de projetos como IDANCETY e produções com Anitta, Ivete Sangalo e grandes nomes da TV brasileira.",
    anos: "1985-2003, 2012-Presente",
    cor: "#FFD700"
  },
  {
    id: 2,
    nome: "Austria",
    cidade: "Vienna",
    descricao: "Criei e apresentei shows para o Tui Magic Life e para a AFAS – Austrian Aerobic Fitness School, unindo performance artística e entretenimento em projetos internacionais de alto nível.",
    anos: "2003-2007",
    cor: "#FFD700"
  },
  {
    id: 3,
    nome: "Turquia",
    cidade: "Istambul",
    descricao: "Fundação da Brasilin, hub criativo conectando talentos brasileiros ao mercado euro-asiático, produzindo para Fashion TV, Coca-Cola e grandes marcas.",
    anos: "2007-2009",
    cor: "#FFD700"
  },
  {
    id: 4,
    nome: "Espanha",
    cidade: "Ilhas Canárias",
    descricao: "Trabalho em resorts de luxo e aperfeiçoamento do espanhol, consolidando a carreira internacional no conceito 'All Inclusive'.",
    anos: "2009-2010",
    cor: "#FFD700"
  },
  {
    id: 5,
    nome: "Suíça",
    cidade: "Genebra",
    descricao: "Coreografia do Miss Suíça e participação em eventos internacionais de grande porte.",
    anos: "2010-2011",
    cor: "#FFD700"
  },
  {
    id: 6,
    nome: "Alemanha",
    cidade: "Munique",
    descricao: "Atuação na abertura do Biathlon nos Jogos Olímpicos de Inverno, marcando presença no cenário esportivo internacional.",
    anos: "2011-2012",
    cor: "#FFD700"
  },
  {
    id: 7,
    nome: "Costa Rica",
    cidade: "San José",
    descricao: "Fase atual: Internacionalização do projeto IDANCETY, criando um polo criativo de produção, formação e exportação artística.",
    anos: "2020-Presente",
    cor: "#FFD700"
  }
  
];

const ExperienciaInternacional = () => {
  const [paisSelecionado, setPaisSelecionado] = useState(null);
  const [imagemSelecionada, setImagemSelecionada] = useState(MapaMundi);
  const [animando, setAnimando] = useState(false);
  const [animarEntrada, setAnimarEntrada] = useState(false);

  useEffect(() => {
    // Animar quando componente montar
    setAnimarEntrada(true);

    // Observer para detectar quando a seção entra na viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimarEntrada(true);
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
    if (animando) return; // Evita cliques durante a animação

    setAnimando(true);

    // Se já tiver um país selecionado, primeiro remove a seleção com animação
    if (paisSelecionado && paisSelecionado.id !== pais.id) {
      setPaisSelecionado(null);

      // Aguarda a animação de saída antes de mostrar o novo país
      setTimeout(() => {
        setPaisSelecionado(pais);
        setImagemSelecionada(imagensPaises[pais.nome]);
        setTimeout(() => {
          setAnimando(false);
        }, 500); // Duração da animação de entrada
      }, 300); // Duração da animação de saída
    } else {
      // Caso não tenha país selecionado ou seja o mesmo país, apenas alterna
      setPaisSelecionado(paisSelecionado?.id === pais.id ? null : pais);
      setImagemSelecionada(imagensPaises[paisSelecionado?.id === pais.id ? null : pais.nome]);

      // Aguarda o fim da animação para permitir novos cliques
      setTimeout(() => {
        setAnimando(false);
      }, 500);
    }
  };

  return (
    <section className="experiencia-internacional" id="experiencia">
      <div className="container">
        <h2 className="section-title" id='internacional-title'><span>Experiência</span> Internacional</h2>
        <p id='internacional-subtitle'>Uma jornada artística pelo mundo</p>

        <div className={`mapa-container ${animarEntrada ? 'animar' : ''}`}>
          <div className="mapa-wrapper">
            {/* Mapa base sempre visível */}
            <div className={`mapa-base ${paisSelecionado ? 'diminuir' : ''}`}>
              {/* Você substituirá esta imagem pela sua */}
              <img
                src={MapaMundi}
                alt="Mapa Mundial"
                className="mapa-imagem"
              />
            </div>

            {/* Container para a imagem com zoom */}
            {paisSelecionado && (
              <div className="mapa-zoom">
                {/* Aqui você colocará a imagem específica do país */}
                <img
                  src={paisSelecionado ? imagemSelecionada : MapaMundi}
                  alt={`Mapa de ${paisSelecionado.nome}`}
                  className="mapa-imagem-zoom"
                />
              </div>
            )}
          </div>

          {/* Detalhes do país aparecem sobre o mapa quando selecionado */}
          {paisSelecionado && (
            <div className="pais-detalhes">
              <h3>{paisSelecionado.nome} <span className="pais-anos">{paisSelecionado.anos}</span></h3>
              <h4>{paisSelecionado.cidade}</h4>
              <p>{paisSelecionado.descricao}</p>
            </div>
          )}
        </div>

        {/* Botões dos países abaixo do mapa */}
        <div className="paises-botoes">
          {paises.map((pais) => (
            <button
              key={pais.id}
              className={`pais-botao ${paisSelecionado?.id === pais.id ? 'ativo' : ''}`}
              onClick={() => handlePaisClick(pais)}
            >
              {pais.nome}
            </button>
          ))}
        </div>

        {/* <div className="experiencia-sumario">
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
        </div> */}
      </div>
    </section>
  );
};

export default ExperienciaInternacional;