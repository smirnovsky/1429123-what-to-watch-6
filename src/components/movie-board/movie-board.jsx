import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list";
import Footer from "../footer/footer";
import {MOVIES_PROP} from "../../utils/valid";

const MovieBoard = (props) => {
  const {movies, moviesIndex} = props;

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="#" className="catalog__genres-link">
              All genres
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Comedies
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Crime
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Documentary
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Dramas
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Horror
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Kids & Family
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Romance
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Sci-Fi
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
              Thrillers
            </a>
          </li>
        </ul>

        <MovieList movies={movies} moviesIndex={moviesIndex} />

        <div className="catalog__more">
          <button className="catalog__button" type="button">
            Show more
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

MovieBoard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(MOVIES_PROP)).isRequired,
  moviesIndex: PropTypes.number.isRequired,
};

export default MovieBoard;
