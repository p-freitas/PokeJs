import React, { useState, useEffect } from 'react'

import { usePokemonsFetch } from '../hooks/usePokemonsFetch'
import Banner from '../components/Banner/Banner.jsx'
import Grid from '../components/Grid/Grid.jsx'
import Thumb from '../components/Thumb/Thumb.jsx'
import Spinner from '../components/Spinner/Spinner.jsx'
import SearchBar from '../components/SearchBar/SearchBar.jsx'
import Button from '../components/Button/Button.jsx'

import { POKEMON_GIF_NIDORAN, POKEMON_GIF_URL } from '../helpers/config'

const Home = () => {

    const { pokemons, loading, setSearchTerm, setIsLoadingMore } = usePokemonsFetch()

    return (<>
        <Banner/>

        <SearchBar setSearchTerm={setSearchTerm} />
        {console.log(setSearchTerm)}
  
        <Grid >
            {pokemons?.results.map((pokemon) => (
                   <Thumb name={pokemon.name}
                    pokemonGif={pokemon.name == 'nidoran-f' || pokemon.name == 'nidoran-m'?
                     POKEMON_GIF_NIDORAN + pokemon.name + '.gif' :
                     POKEMON_GIF_URL + pokemon.name + '.gif' }
                    key={pokemon.id}
                    PokemonId={pokemon.name}
                    clickable={true} />
            ))}
        </Grid>

        {loading && <Spinner />}

        {pokemons?.next && !loading ? (
            <Button text="Carregar mais" callback={(event) => { event.preventDefault(); setIsLoadingMore(true); return false }} />
        ) : null}
    </>)
}

export default Home