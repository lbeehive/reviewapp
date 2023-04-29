import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let MOVIEDATA = require('./components/MovieData.json');
const movies = MOVIEDATA.Movies;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App movies={movies}/>
  </React.StrictMode>
);