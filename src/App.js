import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    const request = axios.get("https://pokeapi.co/api/v2/pokemon?limit=893");
    request.then(res => {
      setPokemons(res.data.results);
    })
  }, []);


  return (
    <>
    </>
  );
}

export default App;
