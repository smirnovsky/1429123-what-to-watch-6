import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {title, avatar, poster} = props;

  return (
    <MainPage title={title} avatar={avatar} poster={poster} />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default App;
