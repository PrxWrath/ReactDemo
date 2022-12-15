import React, { useState } from 'react';

import classes from './AddMovie.module.css';

function AddMovie(props) {
  
  const [title, setTitle] = useState('');
  const [openingText, setOpeningText] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  function submitHandler(event) {
    event.preventDefault();

    const movie = {
      title: title,
      openingText: openingText,
      releaseDate: releaseDate,
    };

    props.onAddMovie(movie);
    setTitle('');
    setOpeningText('');
    setReleaseDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' value={title} onChange={(e)=>{setTitle(e.currentTarget.value)}} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text'value={openingText} onChange={(e)=>{setOpeningText(e.currentTarget.value)}}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' value={releaseDate} onChange={(e)=>{setReleaseDate(e.currentTarget.value)}} />
      </div>
      <button type='submit'>Add Movie</button>
    </form>
  );
}

export default AddMovie;
