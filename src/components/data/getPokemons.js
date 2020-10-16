import axios from 'axios'

getPokemons = async () => {
    
    const request = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=893");
    let poke;

    request.then(res => {
      poke = res.data.results;
    })

    return poke;
}

export default getPokemons;