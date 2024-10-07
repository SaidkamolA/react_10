import React, { useEffect, useState } from 'react';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/episode`);
      const data = await res.json();
      setEpisodes(data.results);
    };
    fetchEpisodes();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Episodes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {episodes.map(episode => (
          <div key={episode.id} className="border p-4 rounded-lg">
            <h2 className="font-bold">{episode.name}</h2>
            <p>Air Date: {episode.air_date}</p>
            <p>Episode: {episode.episode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;
