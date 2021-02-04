import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  MAIN_FILM_TITLE: `The Grand Budapest Hotel`,
  AVATAR_URL: `img/avatar.jpg`,
  POSTER_URL: `img/the-grand-budapest-hotel-poster.jpg`,
};

ReactDOM.render(
    <App
      title={Setting.MAIN_FILM_TITLE}
      avatar={Setting.AVATAR_URL}
      poster={Setting.POSTER_URL}
    />,
    document.querySelector(`#root`)
);
