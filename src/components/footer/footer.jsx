import React from 'react';
import './Footer.css'; // Crea este archivo para los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Empresa</h3>
          <ul>
            <li><a href="#about">Acerca de radio.net</a></li>
            <li><a href="#press">Prensa</a></li>
            <li><a href="#advertise">Anúnciate con nosotros</a></li>
            <li><a href="#broadcast">Emite tus contenidos</a></li>
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
            <a href="#xing" className="social-icon">Xing</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>🇨🇴 Colombia</p>
        <p>v6.23.0 | &copy; 2007-2024 radio.de GmbH</p>
        <p>Generated: {new Date().toLocaleString()}</p>
      </div>
    </footer>
  );
};

export default Footer;
