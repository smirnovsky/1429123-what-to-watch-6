import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  MAIN_FILM_TITLE: `The Grand Budapest Hotel`,
  GENRE: `Comedy`,
  RELEASE_DATE: 2011,
  CARDS_COUNT: 20
};

ReactDOM.render(
    <App
      title={Setting.MAIN_FILM_TITLE}
      genre={Setting.GENRE}
      releaseDate={Setting.RELEASE_DATE}
      cardsCount={Setting.CARDS_COUNT}
    />,
    document.querySelector(`#root`)
);
