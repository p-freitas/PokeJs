import ImagePokemon from '../../components/ImagePokemon/ImagePokemon'

import { render } from '@testing-library/react'

describe('Test component ImagePokemon', () => {
    it('should be render ImagePokemon', () => {
        const { getByTestId, getByText, debug, findByTestId } = render(
            <ImagePokemon 
              pokemonGif={"https://projectpokemon.org/images/normal-sprite/bulbasaur.gif"}
            />
        );
        expect(getByTestId('img').src).toEqual("https://projectpokemon.org/images/normal-sprite/bulbasaur.gif");

    })
})