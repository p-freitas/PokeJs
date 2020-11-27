import {
  POPULAR_BASE_URL,
  API_URL,
  POKEMON_ABILITY_URL,
  POKEMON_EVOLUTION_URL,
  POKEMON_SPECIE_URL,
} from "../helpers/config";

const defaultConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const apiSettings = {
  fetchPokemons: async (searchTerm, limit) => {
    const endpoint = searchTerm
      ? `${API_URL}pokemon/${searchTerm}`
      : `${POPULAR_BASE_URL}?offset=&limit=${limit}`;
    return await (await fetch(endpoint)).json();
  },
  fetchPokemon: async (pokemonId) => {
    const endpoint = `${API_URL}pokemon/${pokemonId}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMove: async (abilityId) => {
    const endpoint = `${POKEMON_ABILITY_URL}${abilityId}`;
    return await (await fetch(endpoint)).json();
  },
  fetchSpecie: async (pokemonID) => {
    const endpoint = `${POKEMON_SPECIE_URL}${pokemonID}`;
    return await (await fetch(endpoint)).json();
  },
  fetchEvolutionChain: async (evolutionChainId) => {
    const endpoint = `${POKEMON_EVOLUTION_URL}${evolutionChainId}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
