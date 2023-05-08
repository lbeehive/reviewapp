import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

function GetNowPlaying () {
   const [movies, setMovies] = useState([]);

   async function getNowPlaying () {

    try {
       const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=bebec7ad8b3a265e7835633b6ac810c8&language=en-US&page=1`;
       //const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=bebec7ad8b3a265e7835633b6ac810c8&language=en-US&page=1`);
       const response = await fetch(url);
       const data = await response.json();
       setMovies(data.results);
       //let movie = movies[1];
       return data;
  
    }  catch (error) {
       console.log(error);
    }
   }
    //let getNowMovieData = require('./MovieNowPlaying.json');
    let getNowMovieData = getNowPlaying();
    //let movies = getNowMovieData.results;
    //let movie = movies[0];
/*
                                         <FaStar size = {18} color='FFA500' className="styles.star" />

*/

    return (
      <div className="styles.nowPlaying">
         <div className="styles.nowPlayingList">
             {
                 movies.map((movie) => (
                  
                  <article key={movie.id} className="styles.card">
                          <img className="styles.poster" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} />
                          <div className="styles.details">
                              <h3> 
                                   <span>Rating: 
                                         <span className="styles.rating"> {movie.vote_average} </span>
                                   </span>Released: 
                                   <span> {movie.release_date}</span>
                              </h3>
                             <h2 className="styles.title">{movie.title}</h2>
 
                         </div>
                     </article>
                  ))
               }
         </div>
      </div>
    )

  }



export default GetNowPlaying;