import React from "react";
import PropTypes from "prop-types";
import MovieFull from "../movie-full/movie-full";
import MovieSame from "../movie-same/movie-same";
import {COMMENTS_PROP, MOVIES_PROP} from "../../utils/valid";
import {getMovieById} from '../../utils/utils';

const MoviePage = (props) => {
  const {movies, comments, id, isLogin, cardsCount, contentType} = props;
  const sameListMovies = movies.slice(0, cardsCount);
  const activeMovie = getMovieById(movies, id);

  return (
    <React.Fragment>
      <MovieFull isLogin={isLogin} comments={comments} movie={activeMovie} contentType={contentType}/>

      <MovieSame movies={sameListMovies} moviesIndex={-1} />
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP)).isRequired,
  movieIndex: PropTypes.number.isRequired,
  isLogin: PropTypes.bool.isRequired,
  cardsCount: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(COMMENTS_PROP)).isRequired,
  contentType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MoviePage;
