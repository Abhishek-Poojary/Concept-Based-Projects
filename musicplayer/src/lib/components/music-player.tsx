import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaVolumeUp } from 'react-icons/fa';
import type { Song } from '../utils/types';


interface MusicPlayerProps {
  songs: Song[];
  currentSongIndex: number;
  setCurrentSongIndex: (index: number) => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ songs, currentSongIndex, setCurrentSongIndex }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Fix: Reload audio and resume playback when song changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play was prevented (e.g., browser policy), pause the player
            setIsPlaying(false);
          });
        }
      }
    }
  }, [currentSongIndex]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseFloat(e.target.value);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex(currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="music-player">
      <audio 
        ref={audioRef} 
        src={currentSong.src} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={nextSong}
      />
      <div className="song-info">
        <h2>{currentSong.title}</h2>
        <p>{currentSong.artist}</p>
      </div>
      <div className="progress-container">
        <span className="time">{formatTime(currentTime)}</span>
        <input 
          type="range" 
          min="0" 
          max={currentSong.duration} 
          value={currentTime} 
          onChange={handleSeek} 
          className="progress-bar"
        />
        <span className="time">{formatTime(currentSong.duration)}</span>
      </div>
      <div className="controls">
        <button onClick={prevSong} className="control-btn">
          <FaStepBackward />
        </button>
        <button onClick={togglePlayPause} className="control-btn play-pause">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={nextSong} className="control-btn">
          <FaStepForward />
        </button>
      </div>
      <div className="volume-control">
        <FaVolumeUp className="volume-icon" />
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume} 
          onChange={handleVolumeChange} 
          className="volume-slider"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;