import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';


const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then((response) => {
          setMovies(response.data);
        })
        .catch((error) => {
          console.error('Server Error', error);
        });
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  const {
    title, director, metascore, stars,
  } = movie;
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
        Director:

          <em>{director}</em>
        </div>
        <div className="movie-metascore">
        Metascore:

          <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    </Link>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    director: PropTypes.string,
    metascore: PropTypes.number,
    stars: PropTypes.arrayOf(
      PropTypes.string,
    ),
  }).isRequired,
};

export default MovieList;
