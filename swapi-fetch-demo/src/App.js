import React, {useEffect, useState, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import Loader from './components/Loader';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try{
      let response = await fetch('https://swapi.dev/api/films/');
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
  }, []);

  const cancelTryHandler = ()=> {
    setError(null);
    setIsLoading(false);
  }

  useEffect(()=>{
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content;
  if(isLoading&&movies.length<=0){
    content= <Loader/>;
  }

  if(error){
    content=<><p>{error}</p><button onClick={cancelTryHandler}>Cancel</button></>
  }

  if(movies.length>0){
    content = <MoviesList movies={movies} />
  }
  
  const onAddMovie = useCallback((movie)=>{
    console.log(movie);
  },[])

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={onAddMovie}/>
      </section>
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
