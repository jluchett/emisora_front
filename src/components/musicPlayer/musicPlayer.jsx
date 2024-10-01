import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import './musicPlayer.css';

const MusicPlayer = ({ currentSong }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.load();
      setIsPlaying(true);
      audioRef.current.play();
    }
  }, [currentSong]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = volume;
  };

  return (
    <div className="music-player">
      <div className="player-controls">
        <div className="volume-control">
          <FontAwesomeIcon icon={faVolumeUp} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
        <div className="track-info">
          <div className="track-details">
            <h3>{currentSong.titulo}</h3>
            <p>{currentSong.artista || "Artista Desconocido"}</p>
          </div>
          <audio
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleTimeUpdate}
            controls={false}
          >
            <source src={currentSong.mp3url} type="audio/mp3" />
          </audio>
          <div className="track-progress">
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={(e) => (audioRef.current.currentTime = e.target.value)}
            />
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        <div className="playback-controls">
          <FontAwesomeIcon icon={faBackward} />
          <FontAwesomeIcon
            icon={isPlaying ? faPause : faPlay}
            onClick={handlePlayPause}
          />
          <FontAwesomeIcon icon={faForward} />
        </div>
      </div>
    </div>
  );
};

// Función auxiliar para formatear el tiempo en minutos:segundos
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export default MusicPlayer;
