import React from 'react';

import { useParams } from 'react-router-dom';
import { POKEMON_GIF_URL, POKEMON_BG, TYPE_BG } from '../helpers/config';
import Spinner from '../components/Spinner/Spinner.jsx';
import BreadCrumbs from '../components/BreadCrumb/BreadCrumb.jsx';
import LeftPanel from '../components/LeftPanel/LeftPanel.jsx';
import Gap from '../components/Gap/Gap.jsx';
import RightPanel from '../components/RightPanel/RightPanel.jsx';
import OpenPokeball from '../assets/images/empty-pokeball.png';
import { usePokemonFetch } from '../hooks/usePokemonFetch';

const Pokemon = () => {

    const { pokemonId } = useParams()

    const { state: pokemon, loading, error } = usePokemonFetch(pokemonId)

    if (loading) return <Spinner />;
    if (error) return <div>Falha na requisição</div>;
    
    return (
        
        <div className='Wrapper' style={{backgroundImage: `url(${POKEMON_BG + pokemon.name}.jpg)`, backgroundColor:`${TYPE_BG[pokemon.types[0].type.name]}`}}>
            <BreadCrumbs pokemon={pokemon} pokemonName={pokemon.name} />
            <div className='pokedex'>
                <div className='inner-container'>
                    <LeftPanel pokemon={pokemon}/>

                    <Gap />

                    <RightPanel imageEvolution1={pokemon.evolutionChain.chain.evolves_to[0]? POKEMON_GIF_URL + pokemon.evolutionChain.chain.evolves_to[0].species.name + '.gif' : OpenPokeball}
                     imageEvolution2={pokemon.evolutionChain.chain.evolves_to[0]?.evolves_to[0]? POKEMON_GIF_URL + pokemon.evolutionChain.chain.evolves_to[0].evolves_to[0].species.name + '.gif' : OpenPokeball}
                     pokemon={pokemon}/>
                </div>
            </div>
        </div>
    );
};


export default Pokemon;