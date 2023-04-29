import React, { useState, useEffect } from "react";
import Home from "./routes/Home";
import Movies from "./routes/Movies";
import MovieDetail from './routes/MovieDetail'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App(props) {

  const [movies, setMovies] = useState(props.movies);


  const movieList = movies
  .map((movie) => (
    <MovieDetail
      id={movie.imdbID}
      title={movie.Title}
      date={movie.Released}
      length={movie.Runtime}
      genre={movie.Genre}
      description={movie.Plot}
      poster={movie.Poster}
      trailer={movie.Trailer}
    />
    ));


  function addMovieComment(id, newComment) {
   
    const editedMovieList = movies.map((movie) => {

      if (id === movie.imdbID) {
        //
        return {...movie, comment: newComment}
      }
      
      return movie;
      
    });

    setMovies(editedMovieList);
    
  }


  return (
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home movies={movies}/>} />
        <Route path="/movies" element={<Movies movies={movieList}/>} />
        <Route path="/movies/:imdbID" element={<MovieDetail
      id={movies[1].imdbID}
      title={movies[1].Title}
      date={movies[1].Released}
      length={movies[1].Runtime}
      genre={movies[1].Genre}
      description={movies[1].Plot}
      poster={movies[1].Poster}
      trailer={movies[1].Trailer}
    />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );

}
export default App;