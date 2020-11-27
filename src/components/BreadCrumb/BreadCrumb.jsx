import React from 'react';
import { Link } from 'react-router-dom';
import {TYPE_COLORS} from '../../helpers/config'

import { Wrapper, Content } from './styles.js';

const BreadCrumbs = ({ pokemonName, pokemon }) => (
<Wrapper style={{background: `#${TYPE_COLORS[pokemon.types[0].type.name]}`}}>
    <Content>
        <Link to="/">
            <span>Home</span>
        </Link>
        <span>|</span>
        <span>{pokemonName}</span>
    </Content>
    {/**console.log(`${TYPE_COLORS[pokemon.types[0].type.name]}`) */}
</Wrapper>)

export default BreadCrumbs;