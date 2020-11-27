import React from 'react';

import { Image, Container } from './styles';

const ImagePokemon = ({pokemonGif}) => (
    <Container>
      <Image data-testid="img" src={pokemonGif} />
    </Container>
);

export default ImagePokemon;