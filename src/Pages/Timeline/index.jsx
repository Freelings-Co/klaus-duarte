// TimelineSection.jsx
import React, { useState, useEffect } from "react";
import "./Timeline.css";

const TimelineSection = () => {
  const [activePhase, setActivePhase] = useState(0);

  // Dados da timeline
  const timelineData = [
    {
      year: "1985-1996",
      title: "Raízes e Despertar Artístico",
      description:
        "Nascido em Goiânia e criado por mulheres fortes vindas do Maranhão. Desde cedo, mostrava talento como orador, representante de sala, e interesse por bastidores e processos criativos.",
      milestones: [
        "Nascimento em Goiânia (1985)",
        "Criação matriarcal",
        "Primeiros sinais artísticos",
      ],
    },
    {
      year: "1997-2003",
      title: "Início Artístico e Primeiros Palcos",
      description:
        "Minha trajetória começou aos 10 anos como modelo infantil, com estudos em passarela, postura e atuação. Participei de audições nacionais, descobri o circo e a pirofagia, e logo entrei para o grupo Flocos de Mel como o personagem Cornetinha. Gravamos um álbum, viajamos em turnê e tivemos um programa na TV Cultura. Aos 17 anos, assumi a direção artística do projeto.",
      milestones: [
        "Início na agência de modelos",
        "Audição para Chiquititas",
        "Descoberta do circo e da pirofagia",
        "Personagem Cornetinha no grupo Flocos de Mel",
        "Programa na TV Cultura",
        "Direção artística aos 17 anos",
        "Como Ator realizou diversos trabalhos, ganhando premios e ingressou na Universidade Federal"
      ],
    },
    {
      year: "2003-2007",
      title: "TUI Magic Life – Supervisor de Entretenimento",
      description:
        "Atuei no TUI Magic Life, onde comecei como assistente de gerente e fui promovido a supervisor de entretenimento. Nesse período, desenvolvi habilidades em liderança, gestão de equipes e criação de experiências memoráveis para hóspedes no setor hoteleiro.",
      milestones: [
        "Entrada como Bailarino e acrobata",
        "Promoção a assistente de gerente de entretenimento",
        "Promoção a supervisor de entretenimento",
        "Criação de experiências para hóspedes",
        "Gestão de equipe multidisciplinar",
        "Desenvolvimento de habilidades de liderança e comunicação",
      ],
    },
    {
      year: "2007-2008",
      title: "Brasilim – Agência de Talentos Internacionais",
      description:
        "Atuei na Brasilim, uma agência de talentos sediada em Istambul, focada em conectar artistas brasileiros ao vibrante mercado euro-asiático. A experiência foi marcada pela promoção de intercâmbios culturais e pela criação de oportunidades internacionais para talentos do Brasil.",
      milestones: [
        "Atuação na Brasilim, com sede em Istambul",
        "Conexão entre artistas brasileiros e o mercado euro-asiático",
        "Promoção de intercâmbios culturais",
        "Expansão de oportunidades internacionais para talentos brasileiros",
      ],
    },
    {
      year: "2008-2013",
      title: "Internacionalização – Turquia e Europa",
      description:
        "Após ser selecionado em uma audição internacional, embarquei em uma jornada transformadora com a rede hoteleira TUI Magic Life. Deixei tudo para trás e mergulhei de cabeça na vivência internacional, atuando em países como Turquia e Espanha. Durante esse período, aprimorei minhas habilidades profissionais, desenvolvi competências multiculturais e aprendi cinco idiomas, expandindo horizontes pessoais e profissionais.",
      milestones: [
        "Seleção em audição internacional",
        "Atuação profissional na Turquia e Espanha",
        "Vivência multicultural em redes hoteleiras internacionais",
        "Aprendizado de 5 idiomas",
        "Criação do IDANCETY",
      ],
    },
    {
      year: "2013-2020",
      title: 'São Paulo e o Mercado Nacional',
  description: 'Em São Paulo, atuei ao lado de grandes nomes da música brasileira, como Anitta, Ivete Sangalo e Junior Lima, participando de projetos marcantes e produções de grande visibilidade. Criei o IDANCETY (City of Dancers), uma plataforma que uniu talentos e ideias, consolidando minha atuação como coreógrafo e diretor artístico no cenário nacional.',
  milestones: [
    'Participação nos DVDs de Anitta e Ivete Sangalo',
    'Direção artística com Lucenzo e outros artistas renomados',
    'Criação do projeto IDANCETY – City of Dancers',
    'Consolidação como coreógrafo e diretor artístico no mercado nacional',
    "Preparador artístico de novos talentos como: Annie Gabriele, Lauana Prado e Heiber Kossa"
  ],
    },
    {
      year: "2020-2025",
      title: 'Expansão Global e Connect360',
  description: 'De volta ao mercado internacional, agora em um novo patamar, atuei como consultor e estrategista em hospitalidade, com foco em experiências de alto padrão na hotelaria de luxo. Fundei a Connect360, uma plataforma global que conecta artistas, marcas e ideias por meio do entretenimento corporativo. A atuação se expandiu para projetos internacionais, incluindo iniciativas na Costa Rica, ampliando ainda mais minha visão e impacto no setor.',
  milestones: [
    'Consultoria em hospitalaria de luxo internacional',
    'Fundação da plataforma Connect360',
    'Desenvolvimento de projetos globais de entretenimento',
    'Atuação estratégica na Costa Rica',
    'Conexão entre artistas, marcas e experiências únicas'
  ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".timeline-item").forEach((item) => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll(".timeline-item").forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="jornada" className="timeline-section">
      <div className="timeline-container">
        <h2 className="section-title" id="timeline-main-title">
          <span className="highlight">Minha</span> Jornada
        </h2>

        <div className="timeline-navigation">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-nav-item ${
                activePhase === index ? "active" : ""
              }`}
              onClick={() => setActivePhase(index)}
            >
              <span className="timeline-year">{item.year}</span>
              <span className="timeline-dot"></span>
            </div>
          ))}
        </div>

        <div className="timeline-controls">
          <button
            className="timeline-btn prev"
            onClick={() =>
              setActivePhase((prev) => (prev > 0 ? prev - 1 : prev))
            }
            disabled={activePhase === 0}
          >
            &larr; Anterior
          </button>
          <button
            className="timeline-btn next"
            onClick={() =>
              setActivePhase((prev) =>
                prev < timelineData.length - 1 ? prev + 1 : prev
              )
            }
            disabled={activePhase === timelineData.length - 1}
          >
            Próximo &rarr;
          </button>
        </div>

        <div className="timeline-content">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${
                activePhase === index ? "active" : ""
              }`}
            >
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
              <ul className="timeline-milestones">
                {item.milestones.map((milestone, i) => (
                  <li key={i}>{milestone}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
