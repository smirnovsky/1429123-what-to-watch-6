import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {title, releaseDate, genre, cardsCount} = props;

  return (
    <MainPage title={title} releaseDate={releaseDate} genre={genre} cardsCount={cardsCount} />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  cardsCount: PropTypes.number.isRequired
};

export default App;
