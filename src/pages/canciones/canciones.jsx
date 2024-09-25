import { useEffect, useState } from 'react';

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
    <div>
      <h1>Lista de Canciones</h1>
      <ul>
        {canciones.map((cancion) => (
          <li key={cancion.id}>
            {cancion.titulo}
            <button onClick={() => handlePlaySong(cancion)}>Reproducir</button>
          </li>
        ))}
      </ul>

      {currentSong && (
        <div>
          <h2>Reproduciendo: {currentSong.titulo}</h2>
          <audio controls>
            <source src={"https://drive.google.com/uc?export=download&id=1haodCRVipkQ1S6p6O8bEGyr--Q-K3P0L"} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      )}
    </div>
  );
}

export default Canciones;
