import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {titleCard, posterCard, posterAltCard} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={posterCard} alt={posterAltCard} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{titleCard}</a>
      </h3>
    </article>
  );
};

Card.propTypes = {
  titleCard: PropTypes.string.isRequired,
  posterCard: PropTypes.string.isRequired,
  posterAltCard: PropTypes.string.isRequired,
};

export default Card;
