import React from 'react';
import type { Song } from '../utils/types';

interface PlaylistProps {
  songs: Song[];
  currentSongIndex: number;
  setCurrentSongIndex: (index: number) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ songs, currentSongIndex, setCurrentSongIndex }) => {
  return (
    <div className="playlist">
      <h3>Playlist</h3>
      <ul>
        {songs.map((song, index) => (
          <li 
            key={song.id} 
            className={index === currentSongIndex ? 'active' : ''} 
            onClick={() => setCurrentSongIndex(index)}
          >
            <div className="song-details">
              <span className="song-title">{song.title}</span>
              <span className="song-artist">{song.artist}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;