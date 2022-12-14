import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import Loader from './components/Loader';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try{
      let response = await fetch('https://swapi.dev/api/film');
      if(!response.ok){
        throw new Error("Something went wrong...retrying");
      }    
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

    }catch(err){
      setTimeout(()=>{fetchMoviesHandler()}, 5000);
      setError(err.message)
    }
    setIsLoading(false);
  }

  const cancelTryHandler = ()=> {
    setError(null);
    setIsLoading(false);
  }
  let content;
  if(isLoading){
    content= <Loader/>;
  }

  if(error){
    content=<><p>{error}</p><button onClick={cancelTryHandler}>Cancel</button></>
  }

  if(movies.length>0){
    content = <MoviesList movies={movies} />
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
