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
      let response = await fetch('https://react-http-demo-b17c2-default-rtdb.firebaseio.com/movies.json');
      if(!response.ok){
        throw new Error("Something went wrong...retrying");
      }    
      let movieJSON = await response.json();
      
      let movieData = [];
      
      for(let key in movieJSON){
        movieData.push({
          id:key,
          title: movieJSON[key].title,
          openingText: movieJSON[key].openingText,
          releaseDate: movieJSON[key].releaseDate,
        })
      }
    
      setMovies(movieData);

    }catch(err){
      setTimeout(()=>{fetchMoviesHandler()}, 5000);
      setError(err.message)
    }
    setIsLoading(false);
  },[])

  const cancelTryHandler = ()=> {
    setError(null);
    setIsLoading(false);
  }
  
  const onAddMovie = useCallback(async (movie)=>{
    try{
    const response = await fetch('https://react-http-demo-b17c2-default-rtdb.firebaseio.com/movies.json', {
      method:'POST',
      body: JSON.stringify(movie),
      headers:{
        'Content-Type':'application/json'
      }
    })
    if(!response.ok){
      throw new Error('Could not post new movie');
    }
    }catch(err){
      console.log(err.message);
    }

    fetchMoviesHandler();
  },[fetchMoviesHandler])
  
  
  const deleteMovieHandler = async (id) => {
    try{
      const response = await fetch(`https://react-http-demo-b17c2-default-rtdb.firebaseio.com/movies/${id}.json`, {
        method:'DELETE',
      })
      if(!response.ok){
        throw new Error('Could not delete the movie');
      }
      }catch(err){
        console.log(err.message);
      }
      fetchMoviesHandler();
      console.log("i am called delete")
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
    content = <MoviesList movies={movies} setDelete={deleteMovieHandler} />
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={onAddMovie}/>
      </section>
      <section>
        <button onClick={()=>{fetchMoviesHandler()}}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
