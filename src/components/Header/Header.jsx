import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

import { Wrapper, Content, LogoImg } from './styles.js'

export default function Header() {
    return (
    <Wrapper>
        <Content>
            <Link to="/">
                <LogoImg src={Logo} alt="rmdb-logo" />
            </Link>
        </Content>
    </Wrapper>
    )
}
