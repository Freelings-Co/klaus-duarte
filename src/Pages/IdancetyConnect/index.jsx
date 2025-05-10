import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import Tonny from "../../assets/BannerTonnyRobins.jpg";
import { User, Film, Sparkles, Link, Lightbulb, RefreshCw } from "lucide-react";

// Custom hook for slider autoplay
const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const IdancetyConnect = () => {
  // Intersection Observer for animations
  const [animateIn, setAnimateIn] = useState(false);
  const sectionRef = useRef(null);

  // Slider state for IDANCETY section
  const [currentIdancetySlide, setCurrentIdancetySlide] = useState(0);
  const idancetySlideCount = 3;

  // Slider state for Connect360 section
  const [currentConnect360Slide, setCurrentConnect360Slide] = useState(0);
  const connect360SlideCount = 3;

  // Tony Robbins event state
  const [tonyRobbinsHovered, setTonyRobbinsHovered] = useState(false);

  // Auto-advance sliders with pause on hover
  const [idancetyPaused, setIdancetyPaused] = useState(false);
  const [connect360Paused, setConnect360Paused] = useState(false);

  useInterval(() => {
    if (!idancetyPaused) {
      setCurrentIdancetySlide((prev) => (prev + 1) % idancetySlideCount);
    }
  }, 5000);

  useInterval(() => {
    if (!connect360Paused) {
      setCurrentConnect360Slide((prev) => (prev + 1) % connect360SlideCount);
    }
  }, 5000);

  // Next and previous slide handlers
  const nextIdancetySlide = () => {
    setCurrentIdancetySlide((prev) => (prev + 1) % idancetySlideCount);
  };

  const prevIdancetySlide = () => {
    setCurrentIdancetySlide(
      (prev) => (prev - 1 + idancetySlideCount) % idancetySlideCount
    );
  };

  const nextConnect360Slide = () => {
    setCurrentConnect360Slide((prev) => (prev + 1) % connect360SlideCount);
  };

  const prevConnect360Slide = () => {
    setCurrentConnect360Slide(
      (prev) => (prev - 1 + connect360SlideCount) % connect360SlideCount
    );
  };

  // Intersection Observer effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateIn(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {/* IDANCETY Global Section */}
      <section
        className="project-section idancety-section"
        id="idancety-global"
      >
        <div className="bg-overlay"></div>
        <div className="container">
          <h2 className="section-title" id="idancety-title">
            <span className="highlight">Projetos </span>Atuais
          </h2>

          <p className="section-subtitle" id="idancety-subtitle">
            Conectando talentos e expandindo fronteiras
          </p>

          <div className={`content-layout ${animateIn ? "animate-in" : ""}`}>
            <div className="content-left">
              <h3 className="project-title">IDANCETY Global</h3>
              <div className="project-tagline">
                <span>
                  Formando talentos, criando oportunidades, transformando vidas
                </span>
              </div>
              <p className="project-description">
                Após mais de duas décadas conectando talentos e experiências ao
                redor do mundo, o IDANCETY expande suas fronteiras,
                transformando a Costa Rica em um polo criativo de produção,
                formação e exportação artística.
              </p>

              <div className="cta-container">
                <button className="btn-primary">
                  <span>Saiba mais</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>

            <div className="content-right">
              <div
                className="slider-container"
                onMouseEnter={() => setIdancetyPaused(true)}
                onMouseLeave={() => setIdancetyPaused(false)}
              >
                <div
                  className="slider-wrapper"
                  style={{
                    transform: `translateX(-${
                      currentIdancetySlide * (100 / idancetySlideCount)
                    }%)`,
                  }}
                >
                  {/* Card 1 */}
                  <div className="slider-card formation-card">
                    <div className="card-content">
                      <div className="card-icon formation-icon">
                        <User color="#FFD700" size={30} />
                      </div>
                      <h4>Formação</h4>
                      <p>
                        Seleção e capacitação de talentos em dança, música, arte
                        e cinematografia para o mercado internacional.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="slider-card production-card">
                    <div className="card-content">
                      <div className="card-icon production-icon">
                        <Film color="#FFD700" size={30} />
                      </div>
                      <h4>Produção</h4>
                      <p>
                        Implementação de experiências de alto nível em grandes
                        resorts, com shows autorais e espetáculos sensoriais.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="slider-card export-card">
                    <div className="card-content">
                      <div className="card-icon export-icon">
                        <Sparkles color="#FFD700" size={30} />
                      </div>
                      <h4>Exportação</h4>
                      <p>
                        Criação de uma ponte entre Brasil, Hollywood e Costa
                        Rica, gerando oportunidades internacionais para
                        artistas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="slider-controls">
                  <button
                    className="slider-arrow prev"
                    onClick={prevIdancetySlide}
                  >
                    ❮
                  </button>
                  <div className="slider-dots">
                    {[...Array(idancetySlideCount)].map((_, index) => (
                      <span
                        key={index}
                        className={`slider-dot ${
                          index === currentIdancetySlide ? "active" : ""
                        }`}
                        onClick={() => setCurrentIdancetySlide(index)}
                      ></span>
                    ))}
                  </div>
                  <button
                    className="slider-arrow next"
                    onClick={nextIdancetySlide}
                  >
                    ❯
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect360 Section */}
      <section className="project-section connect360-section" id="connect360">
        <div className="bg-overlay connect360-overlay"></div>
        <div className="container">
          <div
            className={`content-layout reverse ${
              animateIn ? "animate-in" : ""
            }`}
          >
            <div className="content-left">
              <h3 className="project-title">Connect360</h3>
              <div className="project-tagline">
                <span>O hub global de entretenimento e conexões criativas</span>
              </div>
              <p className="project-description">
                Mais que uma plataforma, a Connect360 é um ecossistema vivo de
                oportunidades, conexões e transformações reais. Conectamos
                artistas, marcas, ideias e sonhos ao redor do planeta.
              </p>

              <div className="expertise-areas">
                <h4>Atuamos em:</h4>
                <div className="area-tags">
                  <span className="area-tag">Televisão</span>
                  <span className="area-tag">Cinema</span>
                  <span className="area-tag">Publicidade</span>
                  <span className="area-tag">Turismo</span>
                  <span className="area-tag">Eventos</span>
                  <span className="area-tag">Digital</span>
                </div>
              </div>

              <div className="cta-container">
                <button className="btn-primary">
                  <span>Conecte-se agora</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>

            <div className="content-right">
              <div
                className="slider-container"
                onMouseEnter={() => setConnect360Paused(true)}
                onMouseLeave={() => setConnect360Paused(false)}
              >
                <div
                  className="slider-wrapper"
                  style={{
                    transform: `translateX(-${
                      currentConnect360Slide * (100 / connect360SlideCount)
                    }%)`,
                  }}
                >
                  {/* Card 1 */}
                  <div className="slider-card connection-card">
                    <div className="card-content">
                      <div className="card-icon connection-icon">
                        <Link color="#FFD700" size={30} />
                      </div>
                      <h4>Conexão</h4>
                      <p>
                        Um portal para quem busca inspiração, direção e ação no
                        mundo do entretenimento global.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="slider-card opportunity-card">
                    <div className="card-content">
                      <div className="card-icon opportunity-icon">
                        <Lightbulb color="#FFD700" size={30} />
                      </div>
                      <h4>Oportunidades</h4>
                      <p>
                        Acesso a audições, mentorias, projetos e experiências
                        onde o seu talento pode ganhar o mundo.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="slider-card transform-card">
                    <div className="card-content">
                      <div className="card-icon transform-icon">
                        <RefreshCw color="#FFD700" size={30} />
                      </div>
                      <h4>Transformação</h4>
                      <p>
                        Um espaço para quem entende que não existe sorte -
                        existe preparo para quando a oportunidade chegar.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="slider-controls">
                  <button
                    className="slider-arrow prev"
                    onClick={prevConnect360Slide}
                  >
                    ❮
                  </button>
                  <div className="slider-dots">
                    {[...Array(connect360SlideCount)].map((_, index) => (
                      <span
                        key={index}
                        className={`slider-dot ${
                          index === currentConnect360Slide ? "active" : ""
                        }`}
                        onClick={() => setCurrentConnect360Slide(index)}
                      ></span>
                    ))}
                  </div>
                  <button
                    className="slider-arrow next"
                    onClick={nextConnect360Slide}
                  >
                    ❯
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tony Robbins Event Section */}
      <section
        className="project-section tony-robbins-section"
        id="tony-robbins"
      >
        <div className="bg-overlay tony-robbins-overlay"></div>
        <div className="container">
          <div className={`content-layout ${animateIn ? "animate-in" : ""}`}>
            <div className="content-left">
              <h3 className="project-title">Klaus Duarte X TONY ROBBINS</h3>
              <div className="project-tagline">
                <span>
                  Transformação pessoal e profissional em um evento único Online
                  e Gratuito.
                </span>
              </div>
              <p className="project-description">
                Uma experiência transformadora com Bryant Cartagena, Treinador
                Oficial da equipe do maior coach de desenvolvimento pessoal do
                mundo. Participe deste evento exclusivo e descubra como
                desbloquear seu potencial máximo, superar limitações e alcançar
                resultados extraordinários em todas as áreas da sua vida.
              </p>

              <div className="expertise-areas">
                <h4>O que você vai vivenciar:</h4>
                <div className="area-tags">
                  <span className="area-tag">Liderança</span>
                  <span className="area-tag">Superação</span>
                  <span className="area-tag">Crescimento</span>
                  <span className="area-tag">Propósito</span>
                  <span className="area-tag">Networking</span>
                  <span className="area-tag">Transformação</span>
                </div>
              </div>

              <div className="cta-container">
                <a
                  href="https://events.blackthorn.io/en/80dgRC6/klaus-duarte-x-tony-robbins-siguiente-nivel-2025-wbryant-cartagena-5a8UV511lPJ/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-primary">
                    <span>Garanta sua vaga</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </a>
              </div>
            </div>

            <div className="content-right">
              <div
                className="event-image-container"
                onMouseEnter={() => setTonyRobbinsHovered(true)}
                onMouseLeave={() => setTonyRobbinsHovered(false)}
              >
                <div
                  className={`event-image ${
                    tonyRobbinsHovered ? "hovered" : ""
                  }`}
                >
                  <img
                    src={Tonny}
                    alt="Tony Robbins em evento de desenvolvimento pessoal"
                    className="tony-robbins-img"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h4>Próximo Evento</h4>
                      <p>Online Event • 7 de Junho, 2025</p>
                      <span className="limited-seats">Vagas Limitadas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IdancetyConnect;
