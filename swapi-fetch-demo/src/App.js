import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const fetchMoviesHandler = async () => {
    try{
      let response = await fetch('https://swapi.dev/api/films');
      let movieJSON = await response.json();
      const movieData = movieJSON.results.map(movie=>{
        return(
          {
            id: movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date
          }
        )
      })
      setMovies(movieData);

    }catch(err){console.log(err)}
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
