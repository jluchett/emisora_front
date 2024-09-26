import { useEffect, useState } from 'react';
import './Canciones.css'; 
import Footer from '../../components/footer/footer';

const Canciones = () => {
  const [canciones, setCanciones] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    // Llamada al backend para obtener las canciones
    fetch('http://localhost:5000/api/canciones')
      .then((response) => response.json())
      .then((data) => setCanciones(data))
      .catch((error) => console.error('Error al obtener canciones:', error));
  }, []);

  const handlePlaySong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="canciones-page">
      <h1 className="titulo">Lista de Canciones</h1>
      <ul className="lista-canciones">
        {canciones.map((cancion) => (
          <li key={cancion.id} className="cancion-item">
            {cancion.titulo}
            <button className="btn-reproducir" onClick={() => handlePlaySong(cancion)}>Reproducir</button>
          </li>
        ))}
      </ul>

      {currentSong && (
        <div className="reproductor">
          <h2>Reproduciendo: {currentSong.titulo}</h2>
          <audio controls>
            <source src={"https://santyluchett.github.io/Musics/Imploramostupresencia.mp3"} type="audio/mp3" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default Canciones;
