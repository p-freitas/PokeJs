import Grid from '../../components/Grid/Grid'

import { render } from '@testing-library/react'

describe('Test component Grid', () => {
    it('should be render Grid', () => {
        const { getByTestId} = render(
            <Grid />
        );
        const grid = getByTestId("grid")
        expect(grid).toBeDefined();
    })
})