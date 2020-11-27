import { useEffect, useState } from 'react';
import { pickRandomIndex } from '../helpers/helpers'

import API from '../service/API';

export const usePokemonFetch = (pokemonId) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                setLoading(true);
                setError(false);

                const pokemon = await API.fetchPokemon(pokemonId);
                
                const randomId = pickRandomIndex(800);
                const move = await API.fetchMove(randomId);
                console.log(randomId)

                const pokemonSpecie = await API.fetchSpecie(pokemon.id);

                const evolutionChainId = pokemonSpecie.evolution_chain.url.split('/')[pokemon.abilities[0].ability.url.split('/').length - 2];
                const evolutionChain = await API.fetchEvolutionChain(evolutionChainId);
                console.log(evolutionChainId);

                setState({
                    ...pokemon,
                    move,
                    evolutionChain,
                });
                setLoading(false);
            } catch (err) {
                console.log('error: ' + err);
                setError(true);
            }
        };

        fetchPokemon();
    }, [pokemonId]);

    return { state, loading, error };
};