import React from 'react';
import { Link } from 'react-router-dom';

import { Image, Container } from './styles';

const EvolutionsSprites = ({name, pokemonGif, stage}) => (
  
    <Container>
      <Link className='link' to={name=='Inexistente'? `` : `/pokemon/${name}`}>
        <div className='center'>
          <div>{stage}</div>
        </div>
        <div className='img'>
          <Image data-testid="img" src={pokemonGif} />
        </div>
        <div className='name'>{name}</div>
        {console.log(name, pokemonGif, stage)}
      </Link>

    </Container>
  
);

export default EvolutionsSprites;