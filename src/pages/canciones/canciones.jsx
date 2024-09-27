import { useEffect, useState, useRef } from 'react';
import './Canciones.css';
import Footer from '../../components/footer/footer';
import Cancion from '../../components/cancion/cancion';

const Canciones = () => {
  const [canciones, setCanciones] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null); // Referencia al elemento de audio

  useEffect(() => {
    // Llamada al backend para obtener las canciones
    fetch('http://localhost:5000/api/canciones')
      .then((response) => response.json())
      .then((data) => setCanciones(data))
      .catch((error) => console.error('Error al obtener canciones:', error));
  }, []);

  // useEffect para reproducir la canción seleccionada
  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.load();  // Cargar la nueva canción
      audioRef.current.play();  // Reproducirla automáticamente
    }
  }, [currentSong]);

  const handlePlaySong = (song) => {
    setCurrentSong(song);
  };

  return (
    < >
      <main className='main-container'>
        <div className='content-container'>
          <section className='container-list'>
            <h1 className="titulo">Lista de Canciones</h1>
            <ol className="lista-canciones">
              {canciones.map((cancion, index) => (
                <li key={cancion.id}>
                  <span className="cancion-numero">{index + 1}</span>
                  <Cancion
                    titulo={cancion.titulo}
                    filename={cancion.filename}
                    duracion="1:35" // Aquí podrías agregar la duración real de tu backend
                    onPlay={() => handlePlaySong(cancion)}
                  />
                </li>
              ))}
            </ol>
          </section>

          <section>
            {currentSong && (
              <div className="reproductor">
                <h2>Reproduciendo: {currentSong.titulo}</h2>
                <audio ref={audioRef} controls>
                  <source src={currentSong.mp3url} type="audio/mp3" />
                  Tu navegador no soporta el elemento de audio.
                </audio>
              </div>
            )}
          </section>

        </div>


      </main>
      <Footer />
    </>
  );
};

export default Canciones;
