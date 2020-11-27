import React from 'react';
import { Wrapper, Text, Sprites } from './styles.js';
import ImagePokemon from '../ImagePokemon/ImagePokemon.jsx';
import Random from '../../assets/images/random.svg';
import { POKEMON_IMG_URL, POKEMON_SPRITE_ATK } from '../../helpers/config';
import { Link } from 'react-router-dom';
import { pickRandomIndex } from '../../helpers/helpers'

const LeftPanel = ({ pokemon }) => {
  return (
    <Wrapper data-testid='LeftPanel'>
        <Text>
          <h1>{pokemon.name}</h1>
        </Text>
        <ImagePokemon pokemonGif={`${POKEMON_IMG_URL}${pokemon.id}.png`} />
        
        <Link className='link' to={`/pokemon/${pickRandomIndex(800)}`}>
          <img className='random' src={Random} alt='random buttom' aria-hidden="true"></img>
        </Link>
        <Sprites>
          <img src={pokemon.sprites.front_default} alt=""/>
          <img src={pokemon.sprites.back_default} alt=""/>
          <img src={pokemon.sprites.front_shiny} alt=""/>
          <img className='animatedSprite' src={`${POKEMON_SPRITE_ATK}${pokemon.id}.gif`} alt=""/>
        </Sprites>
        {/**console.log(pokemon.sprites.front_default, pokemon.sprites.back_default, pokemon.sprites.front_shiny) */}
    </Wrapper>
  )
};

export default LeftPanel;