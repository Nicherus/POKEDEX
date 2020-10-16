import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './components/card';


function App() {

  const [poke, setPoke] = useState(null);

  useEffect(() => {
    const request = axios.get("https://pokeapi.co/api/v2/pokemon?limit=893");

    request.then(res => setPoke(res.data.results))
  }, []);


  return (
    <>
      {poke ? 
        <div className="main">
          <Card
          poke={poke}
          id={113}
          name={poke[112].name}
          />
        </div>
      : <p>CARREGANDO...</p>
      }
    </>
  );
}

export default App;
