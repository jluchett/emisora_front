import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './cancion.css'; 

const Cancion = ({ titulo, filename, duracion, onPlay }) => {
  return (
    <div className="cancion-item">
      <div className="cancion-icono">
        <i className="fas fa-music"></i>
      </div>
      <div className="cancion-info">
        <h3 className="cancion-titulo">{titulo}</h3>
        <p className="cancion-detalles">
          {filename} &nbsp; D: {duracion}
        </p>
      </div>
      <button className="btn-play" onClick={onPlay}>
        <i className="fas fa-play-circle"></i>
      </button>
    </div>
  );
}

export default Cancion;
