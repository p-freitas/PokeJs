import React from 'react';

import { Wrapper, Types, TextAltura, Abilities } from './styles';
import { TYPE_COLORS } from '../../helpers/config';


const Stats = ({pokemon}) => (
    <Wrapper>
      <div className='stats'>
      <div>
        <TextAltura>
            <h4>Altura...{pokemon.height/10}m</h4>
            <h4>Peso...{pokemon.weight/10}kg</h4>
        </TextAltura>
        <Types>
            {pokemon.types.map(el => {
                  return <h4 key={pokemon.id} 
                  style={{
                    borderRadius: '20px',
                    backgroundColor: `#${TYPE_COLORS[el.type.name]}`,
                    color: 'white',
                    margin:'2px 0'
                  }}>{el.type.name}</h4>
                })}
        </Types>
      </div>
      <div>
        <Abilities>
              <div className='flex'>
                <div className='move'>
                  <div className='move-name'>{pokemon.move.name}</div>
                  <p>Accuracy..........{pokemon.move.accuracy? pokemon.move.accuracy : '0'}</p>
                  <p>Power...............{pokemon.move.power? pokemon.move.power : '0'}</p>
                  <p>PP......................{pokemon.move.pp? pokemon.move.pp : '0'}</p>
                  <div style={{
                    borderRadius: '20px',
                    backgroundColor: `#${TYPE_COLORS[pokemon.types[0].type.name]}`,
                    color: 'white',
                    textAlign: 'center'
                  }}>{pokemon.types[0].type.name}</div>
                </div>
                <div>

                </div>
              </div>
        </Abilities>
      </div>
    </div>
    </Wrapper>
);

export default Stats;