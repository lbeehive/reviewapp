// src/routes/Movies.js
let MOVIEDATA = require('../components/MovieData.json');
const movies = MOVIEDATA.Movies;
function Movies() {
 return (
 <main>
<h1>Featured Movie(s):</h1>
 <ul id="movies-list">
 {movies.map((movie) => (
 <li key={movie.id}> 
 {movie.Title} <img src={movie.Poster} alt='movie'></img>
 </li>
 ))}
 </ul>
 </main>
 );
}

export default Movies;
/*
import React, { useState, useEffect } from "react";

function Movies(props) {

  return (
    
     
    
    <div className="todoapp stack-large">
        <p>{MOVIEDATA.Movies[0].Title} - Released: {MOVIEDATA.Movies[0].Released}</p>
        <img src={MOVIEDATA.Movies[0].Poster} alt='movie'></img>
        <p>{MOVIEDATA.Movies[1].Title} - Year: {MOVIEDATA.Movies[1].Year}</p>
        <img src={MOVIEDATA.Movies[1].Poster} alt='movie'></img>
        <p>{MOVIEDATA.Movies[2].Title} - Year: {MOVIEDATA.Movies[2].Year}</p>
        <img src={MOVIEDATA.Movies[2].Poster} alt='movie'></img>
        <p>{MOVIEDATA.Movies[3].Title} - Year: {MOVIEDATA.Movies[3].Year}</p>
        <img src={MOVIEDATA.Movies[3].Poster} alt='movie'></img>
        <p>{MOVIEDATA.Movies[4].Title} - Year: {MOVIEDATA.Movies[4].Year}</p>
        <img src={MOVIEDATA.Movies[4].Poster} alt='movie'></img>
    </div>
    
  );

}
export default App;*/