// import { useEffect } from "react";
// import {currentUser} from "../store/actions/userActions"
// import {store} from '../store/store';
// import { useSelector } from "react-redux";

// function Main(){
//     const user = useSelector((state)=>state.user);
//     useEffect(()=>{
//         const unsubscribe = store.subscribe(()=>{console.log('Store Changed')})
//         const inter = setInterval(()=>{store.dispatch(currentUser())},5000)

//         return () => {clearInterval(inter);unsubscribe();}
//         // currentUser()
//     },[user])
//     return(
        
//            <h1>Welcome to the website<p>{user.name} {user.email}</p></h1>
//     )
// }



// export default Main; 


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(res.data);
    };
    fetchCharacter();
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
};

export default CharacterDetail;
