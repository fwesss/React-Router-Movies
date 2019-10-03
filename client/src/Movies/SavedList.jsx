import React from 'react';
import PropTypes from 'prop-types';


const SavedList = ({ list }) => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {list.map((movie) => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">Home</div>
  </div>
);

SavedList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default SavedList;
