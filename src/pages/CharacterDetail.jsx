import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CharacterDetail = ({ darkMode }) => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                setCharacter(res.data);
            } catch (err) {
                setError('Character not found.');
            } finally {
                setLoading(false);
            }
        };
        fetchCharacter();
    }, [id]);

    return (
        <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className={`p-6 rounded-lg shadow-lg w-full max-w-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                {loading ? (
                    <p className={`text-gray-400`}>Loading character details...</p>
                ) : error ? (
                    <p className={`text-red-500`}>{error}</p>
                ) : (
                    <>
                        <img src={character.image} alt={character.name} className="w-full rounded-lg mb-4" />
                        <h2 className="text-xl font-semibold mb-2">Name: {character.name}</h2>
                        <p className="mb-2">Species: {character.species}</p>
                        <p className="mb-2">Status: {character.status}</p>
                        <p className="mb-2">Gender: {character.gender}</p>
                    </>
                )}
                <p>
                    <Link 
                        to='/characters' 
                        className={`text-blue-500 hover:text-blue-700 font-semibold transition duration-300 ease-in-out ${darkMode ? 'text-blue-300' : 'text-blue-500'}`}
                    >
                        Back to Characters
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default CharacterDetail;
