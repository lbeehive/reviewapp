import React, { useState, useEffect } from "react";
import Home from "./routes/Home";
import Movies from "./routes/Movies";
//import MovieDetail from './routes/MovieDetail'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//<Route path="/moviedetail/:movieId" element={<MovieDetail/>}

function App() {
  
  //let MOVIEDATA = require('./components/MovieData.json');


  return (
    
  <BrowserRouter>
  <Header/>
 <Routes>
 <Route path="/" element={<Home/>} />
 <Route path="/movies" element={<Movies/>}  />
 
 </Routes>
 
 <Footer/>
 </BrowserRouter>
  );

}
export default App;