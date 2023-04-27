import { Link } from 'react-router-dom';

// src/routes/Home.js
function Home() {
  let MOVIEDATA = require('../components/MovieData.json');
  return (
  <main>
  <h1>Welcome to the Movie Reviewer Database</h1>
  <p>Comment and rate your favorite movies as well as add your own movies to the database. Fun for the whole family!</p>
  <Link to="/movies">
  <h2>Featured Movies</h2></Link>
  <p>{MOVIEDATA.Movies[0].Title} - Released: {MOVIEDATA.Movies[0].Released}</p>
        <img src={MOVIEDATA.Movies[0].Poster} alt='movie'></img>
        <label>comment</label>
        <input
          id="homeComment"
          type="textarea"
          
        />
<p><iframe width="560" height="315" src="https://www.youtube.com/embed/frdj1zb9sMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>
  </main>
  );
 }
 export default Home;