// src/routes/Home.js
function Home() {
  let MOVIEDATA = require('../components/MovieData.json');
  return (
  <main>
  <h1>Welcome to the Movie Reviewer Database</h1>
  <p>Comment and rate your favorite movies as well as add your own movies to the database. Fun for the whole family!</p>
  <h2>Featured Movies</h2>
  <p>{MOVIEDATA.Movies[0].Title} - Released: {MOVIEDATA.Movies[0].Released}</p>
        <img src={MOVIEDATA.Movies[0].Poster} alt='movie'></img>
  </main>
  );
 }
 export default Home;