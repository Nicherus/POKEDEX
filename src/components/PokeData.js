import React, { useEffect, useState } from 'react';
import axios from 'axios';

import leftarrow from '../assets/leftarrow.svg'
import rightarrow from '../assets/rightarrow.svg'


export default function PokeData(props){
    
    const [pokeData, setPokeData] = useState(null);
    const [pokeId, setPokeId] = useState(props.location.state.id);

    useEffect(() => {
        renderPoke();
      }, []);

    const renderPoke = () =>{
        const request = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
        request.then(res => {
            setPokeData(res.data);
        })
    }

    const nextPoke = () =>{
        console.log("next poke");
        setPokeId(pokeId + 1);
        renderPoke();
    }


    const previousPoke = () =>{
        console.log("previous poke");
        setPokeId(pokeId - 1);
        renderPoke();
    }

    return(
        <>
            {pokeData ?
                <div className="main-data">
                    <div className="data-perfil">
                        <img className="arrow" src={leftarrow} onClick={() => previousPoke()}></img>
                        <div className="data-perfil-poke">
                            <img className="data-perfil-img" draggable="false" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`}/>
                            <div className="poke-name">{pokeData.forms[0].name}</div>
                            <div className="poke-id">#{pokeId}</div>
                        </div>
                        <img className="arrow" src={rightarrow} onClick={() => nextPoke()}></img>
                    </div>
                    <div className="data-status">
                        <div className="size-exp">
                            <div className="size-exp-sub">
                                <div className="poke-id">Peso</div>
                                {pokeData.weight}
                            </div>
                            <div className="size-exp-sub">
                                <div className="poke-id">Height</div>
                                {pokeData.height}
                            </div>
                            <div className="size-exp-sub">
                                <div className="poke-id">Exp. Base</div>
                                {pokeData.base_experience}
                            </div>
                        </div>
                        <div className="types">
                            <div className="size-exp-sub">
                                <div className="poke-id">Tipos</div>
                                {pokeData.types.map(item => { 
                                        return (<p>{item.type.name}</p>)
                                    }
                                )}
                            </div>
                            <div className="size-exp-sub">
                                <div className="poke-id">Habilidades</div>
                                {pokeData.abilities.map(item => { 
                                        return (<p>{item.ability.name}</p>)
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            :
                <div className="main">
                    <div className="loading">CARREGANDO...</div>
                </div>
            }
        </>
    )
}