const endpoint = "https://pokeapi.co/api/v2/pokemon/?offset=150&limit=150";

const fetchPokemones = () => {
  return fetch(endpoint).then(response => response.json());
};

export { fetchPokemones };
