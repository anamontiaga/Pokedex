import React, { Fragment } from "react";
import Filter from "./Filter";
import PokeList from "./PokeList";
import PropTypes from "prop-types";

const Home = props => {
  const { getQuery, query, pokemones, getPokemonDetail } = props;

  return (
    <Fragment>
      <Filter getQuery={getQuery} />
      <PokeList pokemones={pokemones} query={query} getPokemonDetail={getPokemonDetail} />
    </Fragment>
  );
};

Home.propTypes = {
  getQuery: PropTypes.func.isRequired,
  pokemones: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string
};

export default Home;
