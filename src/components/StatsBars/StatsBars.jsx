import React from 'react';

import { Wrapper } from './styles';
import { TYPE_COLORS } from '../../helpers/config';

const StatsBars = ({pokemon}) => (
    <Wrapper>
      {pokemon.stats.map(el => {
                  return (
                    <div key={pokemon.id}>
                      <h4>{el.stat.name}</h4>
                      <div className='progress'>
                          <div className='progress-bar'
                            role="progressbar"
                            style={{
                              maxWidth:'100%',
                              width: `${el.base_stat}%`,
                              backgroundColor: `#EF5350`
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100">
                              <small>{el.base_stat}</small>
                          </div>
                      </div>
                  </div>
                  )
                  })}
    </Wrapper>
        
    
);

export default StatsBars;