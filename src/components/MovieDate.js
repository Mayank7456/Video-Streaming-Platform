import React from 'react'
import './moviedate.css';

function MovieDate({ movie }) {
  return (
    <div className={`date ${movie.active ? 'active' : ''}`}>
    <h2>{movie.date}</h2>
  </div>
  )
}

export default MovieDate
