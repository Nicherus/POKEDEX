import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/reset.css';
import './styles/header.css';
import './styles/main.css';
import './styles/card.css';

import Header from './components/header';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

