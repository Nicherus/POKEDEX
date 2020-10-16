import React, { useEffect, useState } from 'react';

import getPokemons from './components/data/getPokemons'

import Card from './components/card';


function App() {

  const [poke, setPoke] = useState(null);

  useEffect(() => {
    setPoke(getPokemons());
    console.log(poke)
  }, []);


  return (
    <div className="main">
      <Card
      poke={poke}
      id={384}
      name={'Rayquaza'}
      />
    </div>
  );
}

export default App;
