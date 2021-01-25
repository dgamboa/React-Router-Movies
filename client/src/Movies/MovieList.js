import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  return (
    <div className="movie-list">      
      {props.movies.map(movie => (  
        <Link key={movie.id} to={`/movies/${movie.id}`}>     
          <MovieDetails movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { movie } = props;

  return (
    <div className="movie-card">
      <MovieCard movie={movie} />
    </div>
  );
}
