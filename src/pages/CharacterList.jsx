import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CharacterList = ({ darkMode }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await res.json();
      setCharacters(data.results);
      setInfo(data.info);
    };
    fetchCharacters();
  }, [page]);

  return (
    <div className={`p-4 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <h1 className="text-2xl font-bold mb-4">Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map(character => (
          <div key={character.id} className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200`}>
            <Link to={`/characters/${character.id}`}>
              <img src={character.image} alt={character.name} className="w-full h-48 object-cover mb-2 rounded" />
              <h2 className="font-bold text-lg">{character.name}</h2>
              <p className={`text-gray-300`}>Status: {character.status}</p>
              <p className={`text-gray-300`}>Species: {character.species}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button 
          disabled={page === 1} 
          onClick={() => setPage(page - 1)} 
          className="bg-gray-600 text-white px-4 py-2 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg">Page {page} of {info.pages}</span>
        <button 
          disabled={!info.next} 
          onClick={() => setPage(page + 1)} 
          className="bg-gray-600 text-white px-4 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
