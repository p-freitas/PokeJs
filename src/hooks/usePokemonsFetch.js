import { useState, useEffect } from 'react'

import API from '../service/API'

const initialState = {
    results: [],
};

var pageint = 1;

export const usePokemonsFetch = () => {

    const [pokemons, setPokemons] = useState(initialState);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoadingMore, setIsLoadingMore] = useState(true);
    //console.log(setSearchTerm)

    const fetchPokemons = async (searchTerm = '', limit) => {
        try {
            setError(false)
            setLoading(true)

            pageint++;
            
            //console.log(searchTerm);
            const PokemonsAPI = await API.fetchPokemons(searchTerm, limit)
            
            setPokemons(() => ({
                ...PokemonsAPI,
                results: [...PokemonsAPI.results],
            }));

        } catch (error) {
            setError(true)
            console.log(error)
        }
        setLoading(false);
    }

    useEffect(() => {
        if(!isLoadingMore) return

        var limit = 20;
        
        limit = limit * pageint;
        
        fetchPokemons(searchTerm, limit)
        //console.log(setSearchTerm)
        
        setIsLoadingMore(false)
    }, [isLoadingMore, searchTerm, fetchPokemons])

    return { pokemons, loading, error, searchTerm, setSearchTerm, setIsLoadingMore }

} 