import styled from 'styled-components'

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
    background-color: #da6767;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: var(--maxWidth);
    padding: 5px 0;
    margin: 0 auto;
`

export const LogoImg = styled.img`
    width: 180px;
    transition: width 1s;

    @media screen and (max-width: 500px) {
        width: 150px;
    }
`

export const TMDBLogoImg = styled.img`
    width: 100px;
    transition: width 1s;

    @media screen and (max-width: 500px) {
        width: 80px;
    }
`
