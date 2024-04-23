import React from 'react';
import Movie from '../Movie/Movie';

function MovieList({ movies, getClassByRate }) {
  return (
    <main>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} getClassByRate={getClassByRate} />
      ))}
    </main>
  );
}
export default MovieList;