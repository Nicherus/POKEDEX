import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/reset.css';
import './styles/header.css';
import './styles/main.css';
import './styles/card.css';
import './styles/pokedata.css';

import Header from './components/Header';
import PokeData from './components/PokeData';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/pokemon/" exact component={PokeData} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

