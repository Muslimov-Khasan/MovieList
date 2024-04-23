import React from 'react';

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

 function Movie({ movie, getClassByRate }) {
  return (
    <div className="movie">
      <img src={`${IMGPATH}${movie.poster_path}`} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className={getClassByRate(movie.vote_average)}>
          {movie.vote_average}
        </span>
      </div>
      <div className="overview">
        <h2>{movie.title}:</h2>
        {movie.overview}
      </div>
    </div>
  );
}
export default Movie;