import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router';
import axios from 'axios';

import leftarrow from '../assets/leftarrow.svg'
import rightarrow from '../assets/rightarrow.svg'


export default function PokeData(){
    
    const history = useHistory();
    const params = useParams();
    let pokeId = params.id;

    const [pokeData, setPokeData] = useState(null);
    const [reachMin, setReachMin] = useState(false);
    const [reachMax, setReachMax] = useState(false);


    useEffect(() => {
        renderPoke();
      }, [pokeId]);

    const renderPoke = () =>{
        const request = axios.get(`https://pokeapi.co/api/v2/pokemon/${JSON.parse(pokeId)}`);
        request.then(res => {
            setPokeData(res.data);
        })
    }

    const nextPoke = () =>{
        if(pokeId === 0){
            setReachMin(false)
        }
        if(pokeId === 893){
            setReachMax(true);
        }
        pokeId++
        history.push({pathname: `/pokemon/${pokeId}`});
        renderPoke();
    }

    const previousPoke = () =>{
        if(pokeId === 894){
            setReachMax(false);
        }
        if(pokeId === 1){
            setReachMin(true);
        }
        pokeId--;
        history.push({pathname: `/pokemon/${pokeId}`});
        renderPoke();
    }

    return(
        <>
            {(pokeData && pokeId) ?
                <div className="main-data">
                    <div className="data-perfil">
                        {reachMin ?
                            null
                        :   
                            <img className="arrow" draggable="false" src={leftarrow} onClick={() => previousPoke()}></img> 
                        }
                        <div className="data-perfil-poke">
                            <img className="data-perfil-img" draggable="false" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`}/>
                            <div className="poke-name">{pokeData.name}</div>
                            <div className="poke-id">#{pokeId}</div>
                        </div>
                        {reachMax ?
                            null
                        :   
                            <img className="arrow" draggable="false" src={rightarrow} onClick={() => nextPoke()}></img> 
                        }
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