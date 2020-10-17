import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router';
import axios from 'axios';

import leftarrow from '../assets/leftarrow.svg'
import rightarrow from '../assets/rightarrow.svg'


export default function PokeData(){
    
    const params = useParams();
    const history = useHistory();

    const [pokeData, setPokeData] = useState(null);
    const [pokeId, setPokeId] = useState(null);
    const [reachMin, setReachMin] = useState(false);
    const [reachMax, setReachMax] = useState(false);


    useEffect(() => {
        renderPoke();
      }, []);

    const renderPoke = () =>{
        const request = axios.get(`https://pokeapi.co/api/v2/pokemon/${JSON.parse(params.id)}`);
        request.then(res => {
            setPokeId(JSON.parse(params.id));
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
        history.push({pathname: `/pokemon/${pokeId + 1}`});
        renderPoke();
    }

    const previousPoke = () =>{
        if(pokeId === 894){
            setReachMax(false);
        }
        if(pokeId === 1){
            setReachMin(true);
        }
        history.push({pathname: `/pokemon/${pokeId - 1}`});
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
                            <div className="poke-name">{pokeData.forms[0].name}</div>
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