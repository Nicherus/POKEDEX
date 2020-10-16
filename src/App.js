import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './components/Card';


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
          {poke.map((item, index) => {
            return(
              <Card
              poke={item}
              id={index + 1}
              name={item.name}
              />
            )
          })}
        </div>
      : 
        <div className="main">
          <div className="loading">CARREGANDO...</div>
        </div>
      }
    </>
  );
}

export default App;
