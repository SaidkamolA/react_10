import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import CharacterList from './pages/CharacterList';
import CharacterDetail from './pages/CharacterDetail';
import EpisodeList from './pages/EpisodeList';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <div className={`p-4 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <button 
          onClick={toggleDarkMode} 
          className="mb-4 p-2 bg-gray-200 rounded-full"
        >
          {darkMode ? (
            <i className="fas fa-sun text-yellow-500"></i>
          ) : (
            <i className="fas fa-moon text-gray-800"></i>
          )}
        </button>
        <Routes>
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/characters" element={<CharacterList darkMode={darkMode} />} />
          <Route path="/episodes" element={<EpisodeList darkMode={darkMode} />} />
          <Route path="/" element={<h1 className="text-2xl font-bold">Welcome to Rick and Morty Info</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;