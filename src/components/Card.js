import React from 'react';
import { useHistory } from 'react-router';

const Card = (props) => {
    
    const history = useHistory();

    const routerToPokeData = (id) => {
        history.push({pathname: `/pokemon/${id}`})
    }

    return(
        <div className="card" onClick={() => routerToPokeData(props.id)} >
            <img className="poke-img" draggable="false" src={
                (props.id < 650) ? 
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${props.id}.gif` 
                : 
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
                />
            <div className="poke-text">
                <div className="poke-name">{props.name}</div>
                <div className="poke-id">#{props.id}</div>
            </div>
        </div>
    )
}

export default Card;