import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/header.css';
import './styles/reset.css';

import Header from './components/header';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

