import React, { useState } from 'react';
import type { Song } from '../utils/types';
import MusicPlayer from '../components/music-player';
import Playlist from '../components/playlist';

function App() {
  const [songs] = useState<Song[]>([
    { id: 1, title: 'Song 1', artist: 'Artist 1', src: 'no-copyright-music-1.mp3', duration: 180 },
    { id: 2, title: 'Song 2', artist: 'Artist 2', src: 'no-copyright-music-2.mp3', duration: 200 },
    // Add more songs
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  return (
    <div className="app">
      <h1>Music Player</h1>
      <MusicPlayer 
        songs={songs} 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
      />
      <Playlist 
        songs={songs} 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
      />
    </div>
  );
};

export default App;