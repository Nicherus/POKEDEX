import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/ID_DO_POKEMON.png

export default function card(props) {

    const getPokeData = () =>{
        console.log("getting poke data");
        console.log(props.poke)
        routerToPokeData();
    }

    const routerToPokeData = () => {
        console.log("routing to poke data");
    }

    return(
        <div className="card" onClick={() => getPokeData()} >
            <img className="poke-img" draggable="false" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}></img>
            <div className="poke-text">
                <div className="poke-name">{props.name}</div>
                <div className="poke-id">#{props.id}</div>
            </div>
        </div>
)
}
