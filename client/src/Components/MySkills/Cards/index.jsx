import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

const renderCard = data =>
  data.map(({ id, imageUrl, nameSkill, language, text }) => (
    <Link key={id} to="/" className="cards__card">
      <div className="cards__img">
        <img width="100%" src={imageUrl} alt={`${nameSkill} profile img`} />
      </div>
      <div>
        <h3 className="cards__title">{nameSkill}</h3>
        <h4 className="cards__sub-title">{language}</h4>
        <p className="cards__desc">{text}</p>
      </div>
    </Link>
  ));

const Cards = ({ data }) => {
  return <section className="cards__container">{renderCard(data)}</section>;
};

Cards.defaultProps = { data: [] };

Cards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      fullName: PropTypes.string,
      profession: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default Cards;