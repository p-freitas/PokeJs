const API_URL = "https://pokeapi.co/api/v2/";

const POPULAR_BASE_URL = `${API_URL}pokemon/`; 

const POKEMON_GIF_URL = `https://projectpokemon.org/images/normal-sprite/`;
const POKEMON_IMG_URL = `https://pokeres.bastionbot.org/images/pokemon/`;
const POKEMON_SPRITE_ATK = `https://pkmn.net/sprites/emerald/`;
const POKEMON_ABILITY_URL = `https://pokeapi.co/api/v2/move/`;
const POKEMON_EVOLUTION_URL = `https://pokeapi.co/api/v2/evolution-chain/`;
const POKEMON_SPECIE_URL = `https://pokeapi.co/api/v2/pokemon-species/`;
const POKEMON_GIF_NIDORAN = `https://img.pokemondb.net/sprites/black-white/anim/normal/`;

const POKEMON_BG = `https://raw.githubusercontent.com/shimphillip/gotta-search-em-all/master/public/backgrounds/`;

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: 'a9a5a5',
  fire: 'cf1414',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};

const TYPE_BG = {
  bug: 'rgb(187 197 99 / 60%)',
  dark: 'rgb(136 122 113 / 60%)',
  dragon: 'rgb(185 170 251 / 60%)',
  electric: 'rgb(245 217 146 / 60%)',
  fairy: 'rgb(255 220 255 / 60%)',
  fighting: 'rgb(206 206 206 / 60%)',
  fire: 'rgb(193 77 45 / 60%)',
  flying: 'rgb(195 206 251 / 60%)',
  ghost: 'rgb(158 158 208 / 60%)',
  grass: 'rgb(122 193 65 / 60%)',
  ground: 'rgb(218 200 149 / 60%)',
  ice: 'rgb(190 239 255 / 60%)',
  normal: 'rgb(193 193 193 / 60%)',
  poison: 'rgb(168 108 169 / 60%)',
  psychic: 'rgb(234 144 176 / 60%)',
  rock: 'rgb(195 180 132 / 60%)',
  steel: 'rgb(216 216 216 / 60%)',
  water: 'rgb(78 154 228 / 60%)'
};

export {
  POPULAR_BASE_URL,
  API_URL,
  POKEMON_GIF_URL,
  POKEMON_IMG_URL,
  POKEMON_SPRITE_ATK,
  TYPE_COLORS,
  TYPE_BG,
  POKEMON_ABILITY_URL,
  POKEMON_EVOLUTION_URL,
  POKEMON_SPECIE_URL,
  POKEMON_BG,
  POKEMON_GIF_NIDORAN,
};
