import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route
        exact
        path="/"
        component={MovieList}
      />
      <Route
        path="/movie/:id"
        render={(props) => (
          <Movie
            addToSavedList={addToSavedList}
            match={props.match}
            savedList={savedList}
          />
        )}
      />
    </div>
  );
};

App.propTypes = {
  match: PropTypes.string,
};

App.defaultProps = {
  match: '',
};

export default App;
