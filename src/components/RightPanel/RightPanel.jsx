import React from 'react';
import { Wrapper, Types, TextAltura, Sprites, Abilities } from './styles.js';
import ImagePokemon from '../ImagePokemon/ImagePokemon.jsx';
import Stats from '../Stats/Stats.jsx';
import Evolutions from '../Evolutions/Evolutions.jsx';
import StatsBars from '../StatsBars/StatsBars.jsx';
import { POKEMON_IMG_URL, POKEMON_SPRITE_ATK, TYPE_COLORS, POKEMON_ABILITY_URL } from '../../helpers/config';


const RightPanel = ({ pokemon, imageEvolution1, imageEvolution2}) => (

  <Wrapper>
    <Stats pokemon={pokemon}/>
    <Evolutions imageEvolution1={imageEvolution1} imageEvolution2={imageEvolution2} pokemon={pokemon}/>

    <StatsBars pokemon={pokemon}/>
    
      {console.log(pokemon,imageEvolution1, imageEvolution2)}
  </Wrapper>
);

export default RightPanel;