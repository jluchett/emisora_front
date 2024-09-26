import React from "react";
import { Link } from "react-router-dom";
import './header.css'; // Puedes agregar tus estilos aquí

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Tecno .net</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/canciones">Música</Link>
            </li>
            <li className="nav-item">
              <Link to="/libros">Libros</Link>
            </li>
            <li className="nav-item">
              <Link to="/peliculas">Películas</Link>
            </li>
            <li className="nav-item">
              <Link to="/noticias">Noticias</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
