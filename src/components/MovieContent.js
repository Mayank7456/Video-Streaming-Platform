import React from 'react'
import './moviecontent.css';
import titleImg from '../image/transformer-title.png';
import Button from './Button';


function MovieContent({ movie }) {
  return (
    <div className={`content ${movie.active ? 'active' : ''}`}>

                <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
                <h4>
                  <span> {movie.year} </span>
                  <span>  <i> {movie.ageLimit} </i>  </span>
                  <span>  {movie.length} </span>
                  <span> {movie.category} </span>
                </h4>
                <p>{movie.description}</p>
                <div className="button">
                 <Button icon={<ion-icon name="bookmark-outline"></ion-icon>} 
                 name="BOOk"
                  color="#ff3700"
                   bgcolor="#ffffff" />
                   <Button icon={<ion-icon name="add-outline"></ion-icon>} name='MyList'/>
                </div>
              </div>
  );
}

export default MovieContent;
