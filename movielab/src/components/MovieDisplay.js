import React from 'react'

const MovieDisplay = (props) => {
   let movie = props.movie
  return (
    <div>
        <h1>The MovieDisplay Component</h1>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title}  />
        <h2>{movie.Year}</h2>
    </div>
  )
}

export default MovieDisplay