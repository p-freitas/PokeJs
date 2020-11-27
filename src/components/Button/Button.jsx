import React from 'react';

import { Wrapper } from './styles.js';

const Button = ({ text, callback}) => (
    <Wrapper type="button" onClick={callback}>
        {text}
        {console.log(callback)}
    </Wrapper>
);

export default Button;