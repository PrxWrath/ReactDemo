import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import Loader from './components/Loader';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    try{
      let response = await fetch('https://swapi.dev/api/films');
      let movieJSON = await response.json();
      setIsLoading(false);
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
        {isLoading&&<Loader/>}
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
