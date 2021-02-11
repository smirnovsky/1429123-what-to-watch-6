import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list";

const MyListPage = (props) => {
  const {isLogin, cardsCount} = props;

  return (
    <div className="user-page">
      <Header
        isLogin={isLogin}
        headerTitle={`My list`}
        isReview={false}
        pageType={`user`}
      />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList cardsCount={cardsCount} />
      </section>

      <Footer />
    </div>
  );
};

MyListPage.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  cardsCount: PropTypes.number.isRequired,
};

export default MyListPage;
