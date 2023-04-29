import { Link } from 'react-router-dom';
import React, { useState } from "react";

//let MOVIEDATA = require('../components/MovieData.json');
//const movies = MOVIEDATA.Movies;
/*

        {movieList.map((movie) => (
          <li key={movie.imdbID}>
            <Link to={movie.imdbID}>
              {movie.Title}
            </Link>
            <p>{movie.Released}</p>
            <p>{movie.Runtime}</p>
            <p>{movie.Genre}</p>
            <p>{movie.Plot}</p>
            <img src={movie.Poster} alt='movie'/>
            <iframe width="560" height="315" src={movie.Trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <label>comment</label>
            <textarea
              id="homeComment"
              type="textarea"
              rows={6}
              cols={20}
              
            />
          </li>
        ))}

*/

function Movies(props) {

  return (

    <main>
      <h1>Featured Movie(s):</h1>
      <ul id="movies-list">
        {props.movies}
      </ul>
    </main>
  );
}

export default Movies;