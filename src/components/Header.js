import React from 'react';
import logo from '../assets/logo-pokedex.png';
import { useHistory } from 'react-router';

export default function Header() {

    const history = useHistory();

    const returnHome = () => {
        history.push({
            pathname: '/', 
        })
    }

    return(
        <>
            <div className="header" onClick={() => returnHome()} >
                <img className="logo" src={logo}></img>
            </div>
        </>
    )
}
