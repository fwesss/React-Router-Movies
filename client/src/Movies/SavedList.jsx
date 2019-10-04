import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const SavedList = ({ list }) => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {list.map((movie) => (
      <NavLink to={`/movie/${movie.id}`} className="saved-movie" key={movie.id}>{movie.title}</NavLink>
    ))}
    <Link to="/" className="home-button">Home</Link>
  </div>
);

SavedList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default SavedList;
