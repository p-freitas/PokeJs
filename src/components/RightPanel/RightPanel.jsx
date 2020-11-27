import React from 'react';
import { Wrapper} from './styles.js';
import Stats from '../Stats/Stats.jsx';
import Evolutions from '../Evolutions/Evolutions.jsx';
import StatsBars from '../StatsBars/StatsBars.jsx';

const RightPanel = ({ pokemon, imageEvolution1, imageEvolution2}) => (

  <Wrapper>
    <Stats pokemon={pokemon}/>

    <Evolutions imageEvolution1={imageEvolution1} imageEvolution2={imageEvolution2} pokemon={pokemon}/>

    <StatsBars pokemon={pokemon}/>
    
    {/** console.log(pokemon,imageEvolution1, imageEvolution2) */}
  </Wrapper>
);

export default RightPanel;