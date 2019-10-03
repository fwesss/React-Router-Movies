import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const SavedList = ({ list }) => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {list.map((movie) => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link to="/" className="home-button">Home</Link>
  </div>
);

SavedList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default SavedList;
