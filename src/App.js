import React, { useState } from "react";
import Home from "./routes/Home";
import Movies from "./routes/Movies";
import MovieDetail from './routes/MovieDetail'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App(props) {

  const [movies, setMovies] = useState(props.movies);
  const [thisMovie, setMovie] = useState(props.movies[0]);

  function addMovieComment(id, newStar, newComment) {
   
    const editedMovieList = movies.map((movie) => {

      if (id === movie.imdbID) {
        //
        let currentReviews = movie.UserReviews;
        
        let newReview = {"Review": newComment, "Stars": newStar};
        let updatedReviews = currentReviews.concat(newReview);
        //let updatedReviews = {...currentReviews, newReview};
        
        setMovie({...movie, UserReviews: updatedReviews});
        return {...movie, UserReviews: updatedReviews}
        
      }
      
      return movie;
      
    });

    setMovies(editedMovieList);
    
  }
  function changeMovie(id) {

    const getNewMovie = movies.map((movie) => {

      if (id === movie.imdbID) {
        //
        setMovie(movie);
      }
      return movie;
    });

    return getNewMovie;

  }

  const newMovie = <MovieDetail
    id={thisMovie.imdbID}
    title={thisMovie.Title}
    date={thisMovie.Released}
    length={thisMovie.Runtime}
    genre={thisMovie.Genre}
    description={thisMovie.Plot}
    poster={thisMovie.Poster}
    trailer={thisMovie.Trailer}
    addComment={addMovieComment}
    updateMovie={changeMovie}
    reviews={thisMovie.UserReviews}
    />

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
      addComment={addMovieComment}
      updateMovie={changeMovie}
      reviews={movie.UserReviews}
      />
    ));

  return (
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home movies={movies}/>} />
        <Route path="/movies" element={<Movies movies={movieList}/>} />
        <Route path="/movies/:imdbID" element={newMovie} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );

}
export default App;