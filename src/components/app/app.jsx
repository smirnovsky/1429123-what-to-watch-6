import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SingInPage from "../sign-in-page/sign-in-page";
import MyListPage from "../my-list-page/my-list-page";
import MoviePage from "../movie-page/movie-page";
import AddReviewPage from "../add-review-page/add-review-page";
import PlayerPage from "../player-page/player-page";
import ErrorPage from "../error-page/error-page";

const CountCard = {
  MY_LIST: 5,
  SAME: 4
};

const App = (props) => {
  const {cardsCount, movieTitle, movieGenre, movieYear, isLogin} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            cardsCount={cardsCount}
            movieTitle={movieTitle}
            movieGenre={movieGenre}
            movieYear={movieYear}
            isLogin={isLogin}
          />
        </Route>
        <Route exact path="/login">
          <SingInPage isLogin={isLogin} />
        </Route>
        <Route exact path="/mylist">
          <MyListPage
            isLogin={isLogin}
            cardsCount={CountCard.MY_LIST}
          />
        </Route>
        <Route exact path="/films/:id">
          <MoviePage
            isLogin={isLogin}
            cardsCount={CountCard.SAME}
          />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewPage isLogin={isLogin} />
        </Route>
        <Route exact path="/player/:id">
          <PlayerPage />
        </Route>
        <Route>
          <ErrorPage isLogin={isLogin} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.string.isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default App;
