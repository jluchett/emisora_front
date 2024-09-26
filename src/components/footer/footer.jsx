import React from 'react';
import './Footer.css'; // Crea este archivo para los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Emisora</h3>
          <ul>
            <li><a href="#about">Acerca de Emisora.net</a></li>
            <li><a href="#press">Misión</a></li>
            <li><a href="#press">Visión</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Información legal</h3>
          <ul>
            <li><a href="#terms">Condiciones de uso</a></li>
            <li><a href="#privacy">Política de privacidad</a></li>
            <li><a href="#legal">Aviso legal</a></li>
            <li><a href="#privacy-manager">Privacy-Manager</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Servicio</h3>
          <ul>
            <li><a href="#contact">Contacto</a></li>
            <li><a href="#apps">Aplicaciones</a></li>
            <li><a href="#faq">Ayuda / FAQ</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Redes sociales</h3>
          <div className="social-icons">
            <a href="#linkedin" className="social-icon">LinkedIn</a>
            <a href="#xing" className="social-icon">X</a>
            <a href="#xing" className="social-icon">WhatsApp</a>
            <a href="#xing" className="social-icon">Facebook</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>🇨🇴 Colombia</p>
        <p>v1.0.0 | &copy; 2024 Emisora.net</p>
        <p>Generated: {new Date().toLocaleString()}</p>
      </div>
    </footer>
  );
};

export default Footer;
