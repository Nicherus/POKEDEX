import React from 'react';
import logo from '../assets/logo-pokedex.png';

export default function header() {
    return(
        <>
            <div className="header">
                <img className="logo" src={logo}></img>
            </div>
        </>
    )
}
