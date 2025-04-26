import React, { useState, useEffect } from 'react';
import './style.css';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Nome é obrigatório";
    if (!formData.email.trim()) {
      errors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email inválido";
    }
    if (!formData.message.trim()) errors.message = "Mensagem é obrigatória";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Aqui você implementaria a lógica para enviar o formulário
      console.log("Formulário enviado:", formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset form status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  // Animação para quando o componente entrar na viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contato" className="contact-section">
     
        <h2 className="section-title" id='contact-title'><span>Entre </span> em CONTATO</h2>
        <p className="contact-subtitle animate-on-scroll">
          O palco é seu. O mundo está pronto. <span className="highlight">Conecte-se agora.</span>
        </p>
 

      <div className="contact-container">
        <div className="contact-form-container animate-on-scroll">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${formErrors.name ? 'error' : ''}`}
                placeholder="Seu nome"
              />
              {formErrors.name && <span className="error-message">{formErrors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${formErrors.email ? 'error' : ''}`}
                placeholder="seu@email.com"
              />
              {formErrors.email && <span className="error-message">{formErrors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="Assunto da mensagem"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`form-input textarea ${formErrors.message ? 'error' : ''}`}
                placeholder="Sua mensagem"
                rows={5}
              />
              {formErrors.message && <span className="error-message">{formErrors.message}</span>}
            </div>

            <button type="submit" className="submit-button">
              {isSubmitted ? 'Mensagem Enviada!' : 'Enviar Mensagem'}
            </button>

            {isSubmitted && (
              <div className="success-message">
                Obrigado pelo contato! Retornaremos em breve.
              </div>
            )}
          </form>
        </div>

        <div className="contact-info-container animate-on-scroll">
          <div className="contact-info">
            <h3>Vamos Conversar</h3>
            <p>Estou à disposição para projetos, colaborações, mentorias ou simplesmente para trocar ideias sobre arte e entretenimento.</p>

            <div className="contact-details">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>cnt360cr@gmail.com</span>
              </div>

              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+506 7085 4154</span>
              </div>

              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>Costa Rica | Brasil | Global</span>
              </div>
            </div>

            <div className="social-links">
              <h4>Conecte-se</h4>
              <div className="social-icons">
                <a href="https://www.instagram.com/klausduarteon" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  <Instagram className="social-icon" />
                </a>
                <a href="https://www.facebook.com/klausduarte" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  <Facebook className="social-icon" />
                </a>
                <a href="https://www.youtube.com/@KlausDuarte" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                  <Youtube className="social-icon" />
                </a>
                {/* Adicione mais ícones de redes sociais conforme necessário */}
              </div>
            </div>

            <div className="contact-cta">
              <h4>IDANCETY & Connect360</h4>
              <p>Interessado em audições, treinamentos ou parcerias? Mencione no seu contato.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;