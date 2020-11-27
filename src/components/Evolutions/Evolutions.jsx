import React from 'react';
import EvolutionsSprites from '../EvolutionsSprites/EvolutionsSprites';


import { Wrapper } from './styles';
import { POKEMON_GIF_URL } from '../../helpers/config';

const Evolutions = ({pokemon, imageEvolution1, imageEvolution2}) => (
    
    <Wrapper>
      <EvolutionsSprites name={pokemon.evolutionChain.chain.species.name} stage={'I'} pokemonGif={POKEMON_GIF_URL + pokemon.evolutionChain.chain.species.name + '.gif'} />
      <EvolutionsSprites name={pokemon.evolutionChain.chain.evolves_to[0]? pokemon.evolutionChain.chain.evolves_to[0].species.name: 'Inexistente'}  stage={'II'} pokemonGif={imageEvolution1} />
      <EvolutionsSprites name={pokemon.evolutionChain.chain.evolves_to[0]?.evolves_to[0]? pokemon.evolutionChain.chain.evolves_to[0].evolves_to[0].species.name: 'Inexistente'} stage={'III'} pokemonGif={imageEvolution2} />
    </Wrapper>
    
);

export default Evolutions;