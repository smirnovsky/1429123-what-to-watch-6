import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import SingInPage from "../sign-in-page/sign-in-page";
import MyListPage from "../my-list-page/my-list-page";
import MoviePage from "../movie-page/movie-page";
import AddReviewPage from "../add-review-page/add-review-page";
import PlayerPage from "../player-page/player-page";
import ErrorPage from "../error-page/error-page";
import {MOVIES_PROP, COMMENTS_PROP} from "/src/utils/valid";
import {CONTENT_TYPE} from "/src/const";

const CountCard = {
  MY_LIST: 5,
  SAME: 4,
  ACTIVE: 0,
};

const App = (props) => {
  const {movies, comments, isLogin} = props;
  const activeMovie = movies[CountCard.ACTIVE];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            movies={movies}
            isLogin={isLogin}
          />
        </Route>
        <Route exact path="/login">
          <SingInPage isLogin={isLogin} />
        </Route>
        <Route exact path="/mylist">
          <MyListPage
            movies={movies}
            isLogin={isLogin}
            cardsCount={CountCard.MY_LIST}
          />
        </Route>
        <Route
          exact
          path="/films/:id"
          render={({match}) => (
            <MoviePage
              movies={movies}
              comments={comments}
              isLogin={isLogin}
              cardsCount={CountCard.SAME}
              contentType={CONTENT_TYPE.OVERVIEW}
              id={Number(match.params.id)}
            />
          )}>
        </Route>
        <Route
          exact
          path="/films/:id/details"
          render={({match}) => (
            <MoviePage
              movies={movies}
              comments={comments}
              isLogin={isLogin}
              cardsCount={CountCard.SAME}
              contentType={CONTENT_TYPE.DETAILS}
              id={Number(match.params.id)}
            />
          )}>
        </Route>
        <Route
          exact
          path="/films/:id/reviews"
          render={({match}) => (
            <MoviePage
              movies={movies}
              comments={comments}
              isLogin={isLogin}
              cardsCount={CountCard.SAME}
              contentType={CONTENT_TYPE.REVIEWS}
              id={Number(match.params.id)}
            />
          )}>
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewPage
            isLogin={isLogin}
          />
        </Route>
        <Route exact path="/player/:id">
          <PlayerPage movie={activeMovie} />
        </Route>
        <Route>
          <ErrorPage isLogin={isLogin} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP)).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(COMMENTS_PROP)).isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default App;
