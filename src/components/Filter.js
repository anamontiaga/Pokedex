import React from "react";
import "../stylesheets/Filter.scss";
import PropTypes from "prop-types";

const Filter = props => {
  const { getQuery, query } = props;
  return (
    <div className="app__filter">
      <input type="text" className="app__filter--input" placeholder="Filtra pokemons por nombre..." onChange={getQuery} value={query} />
    </div>
  );
};

Filter.propTypes = {
  getQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
};

export default Filter;
