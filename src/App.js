import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './components/Card';

import spinner from './assets/pokeloading.gif'
import Search from './components/Search';

function App() {

  const [poke, setPoke] = useState(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const request = axios.get("https://pokeapi.co/api/v2/pokemon?limit=893");
    
    request.then(res => {
      setPoke(res.data.results.map(f => {
        const id = f.url.split('/')
        return {
          name: f.name,
          id: id[6]
        }
      }))
    })
  }, []);


  return (
    <>
      {poke ? 
        <>
          <Search
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <div className="main">

            {poke
            .filter(s => s.name.includes(searchText))
            .map((item) => {
              return(
                <Card
                id={item.id}
                name={item.name}
                />
              )
            })}
          </div>
        </>
      : 
        <div className="main">
          <img src={spinner} className="loading" alt='loading...'/>
        </div>
      }
    </>
  );
}

export default App;
