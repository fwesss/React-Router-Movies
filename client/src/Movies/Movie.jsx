import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


const Movie = ({ addToSavedList, match, savedList }) => {
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    const { id } = match.params;

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [match.params, match.params.id]);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    addToSavedList(movie);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <div
        className="save-button"
        role="button"
        tabIndex={0}
        onKeyPress={() => {
          if (savedList.length === 0) {
            saveMovie();
          } else if (savedList.some((savedMovie) => savedMovie.id === movie.id)) {
            // do nothing
          } else {
            saveMovie();
          }
        }}
        onClick={() => {
          if (savedList.length === 0) {
            saveMovie();
          } else if (savedList.some((savedMovie) => savedMovie.id === movie.id)) {
            // do nothing
          } else {
            saveMovie();
          }
        }}
      >
Save
      </div>
    </div>
  );
};

Movie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  savedList: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  addToSavedList: PropTypes.func.isRequired,
};

export default Movie;
