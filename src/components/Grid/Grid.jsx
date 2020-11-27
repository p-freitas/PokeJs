import React from 'react'

import { Wrapper, Content } from './styles.js'

const Grid = ({children}) => (
<Wrapper data-testid='grid'>
    <Content>{children}</Content>
</Wrapper>)

export default Grid