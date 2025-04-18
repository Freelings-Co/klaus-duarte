// IdancetyConnect.jsx
import React, { useState, useEffect } from 'react';
import './style.css';

const IdancetyConnect = () => {
  const [activeTab, setActiveTab] = useState('idancety');
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateIn(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.querySelector('.idancety-connect');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="idancety-connect" id="projetos-atuais">
      <div className="container">
        <h2 className="section-title">Projetos Atuais</h2>
        <p className="section-subtitle">Conectando talentos e expandindo fronteiras</p>
        
        <div className="projetos-tabs">
          <button 
            className={`tab-btn ${activeTab === 'idancety' ? 'active' : ''}`}
            onClick={() => setActiveTab('idancety')}
          >
            IDANCETY Global
          </button>
          <button 
            className={`tab-btn ${activeTab === 'connect360' ? 'active' : ''}`}
            onClick={() => setActiveTab('connect360')}
          >
            Connect360
          </button>
        </div>
        
        <div className="projetos-content">
          {activeTab === 'idancety' && (
            <div className={`projeto-detalhes ${animateIn ? 'animate-in' : ''}`}>
              <div className="projeto-info">
                <h3>IDANCETY Global</h3>
                <p className="projeto-tagline">Formando talentos, criando oportunidades, transformando vidas</p>
                
                <div className="projeto-descricao">
                  <p>Após mais de duas décadas conectando talentos e experiências ao redor do mundo, o IDANCETY expande suas fronteiras, transformando a Costa Rica em um polo criativo de produção, formação e exportação artística.</p>
                  
                  <div className="projeto-destaques">
                    <div className="destaque">
                      <h4>Formação</h4>
                      <p>Seleção e capacitação de talentos em dança, música, arte e cinematografia para o mercado internacional.</p>
                    </div>
                    <div className="destaque">
                      <h4>Produção</h4>
                      <p>Implementação de experiências de alto nível em grandes resorts, com shows autorais e espetáculos sensoriais.</p>
                    </div>
                    <div className="destaque">
                      <h4>Exportação</h4>
                      <p>Criação de uma ponte entre Brasil, Hollywood e Costa Rica, gerando oportunidades internacionais para artistas.</p>
                    </div>
                  </div>
                  
                  <div className="projeto-chamada">
                    <h4>Você faz parte desta história</h4>
                    <p>Seja como artista, parceiro ou patrocinador, junte-se a nós nesta jornada de expansão e transformação global.</p>
                    <button className="btn-saiba-mais">Saiba mais</button>
                  </div>
                </div>
              </div>
              
              <div className="projeto-imagem">
                <div className="imagem-container idancety-imagem">
                  {/* Aqui entraria a imagem real do projeto */}
                  <div className="placeholder-image">IDANCETY Global</div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'connect360' && (
            <div className={`projeto-detalhes ${animateIn ? 'animate-in' : ''}`}>
              <div className="projeto-info">
                <h3>Connect360</h3>
                <p className="projeto-tagline">O hub global de entretenimento e conexões criativas</p>
                
                <div className="projeto-descricao">
                  <p>Mais que uma plataforma, a Connect360 é um ecossistema vivo de oportunidades, conexões e transformações reais. Conectamos artistas, marcas, ideias e sonhos ao redor do planeta.</p>
                  
                  <div className="projeto-destaques">
                    <div className="destaque">
                      <h4>Conexão</h4>
                      <p>Um portal para quem busca inspiração, direção e ação no mundo do entretenimento global.</p>
                    </div>
                    <div className="destaque">
                      <h4>Oportunidades</h4>
                      <p>Acesso a audições, mentorias, projetos e experiências onde o seu talento pode ganhar o mundo.</p>
                    </div>
                    <div className="destaque">
                      <h4>Transformação</h4>
                      <p>Um espaço para quem entende que não existe sorte – existe preparo para quando a oportunidade chegar.</p>
                    </div>
                  </div>
                  
                  <div className="projeto-atua">
                    <h4>Atuamos em:</h4>
                    <ul className="areas-atuacao">
                      <li>Televisão</li>
                      <li>Cinema</li>
                      <li>Publicidade</li>
                      <li>Turismo</li>
                      <li>Eventos corporativos</li>
                      <li>Plataformas digitais</li>
                      <li>Ativações de marca</li>
                    </ul>
                  </div>
                  
                  <div className="projeto-chamada">
                    <button className="btn-saiba-mais">Conecte-se agora</button>
                  </div>
                </div>
              </div>
              
              <div className="projeto-imagem">
                <div className="imagem-container connect360-imagem">
                  {/* Aqui entraria a imagem real do projeto */}
                  <div className="placeholder-image">Connect360</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IdancetyConnect;