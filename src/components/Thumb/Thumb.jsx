import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Image } from './styles.js';

const Thumb = ({ PokemonId, name, pokemonGif}) => (
    <Wrapper>
        <h1>{name}</h1>
            <Link to={`/pokemon/${PokemonId}`}>
                <Image data-testid="img" src={pokemonGif} />
            </Link>
    </Wrapper>
    
);

export default Thumb;