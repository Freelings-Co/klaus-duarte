import React from 'react';
import './style.css';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Klaus Duarte</h3>
          <p>Conectando pessoas e negócios através de soluções inovadoras e criativas.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/klausduarte" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/klaus.duarte/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://br.linkedin.com/in/klaus-duarte-8b897970" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.youtube.com/c/KlausDuarte/videos" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <ul className="contact-info">
            <li>
              <Phone size={16} />
              <span>+506 7085 4154</span>
            </li>
            <li>
              <Mail size={16} />
              <span>cnt360cr@gmail.com</span>
            </li>
            <li>
              <MapPin size={16} />
              <span>San José, Costa Rica</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Klaus Duarte. Todos os direitos reservados.</p>
        <a href="https://freelings.com.br" target="_blank" rel="noopener noreferrer">Desenvolvido por Freelings Company</a>
      </div>
    </footer>
  );
};

export default Footer;
