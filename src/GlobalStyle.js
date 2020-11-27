import { createGlobalStyle } from 'styled-components' 

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  :root{
    --maxWidth: 1260px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  *{
    box-sizing: border-box;
  }

  body{
    background-color: #de3a2d87;
    margin: 0;
    padding: 0;

    h1{
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3{
      font-size: 1.1rem;
      font-weight: 600;
    }

    p{
      font-size: 1rem;
      color: var(--white);
    }
  }

  .Wrapper{
    height:935px;
    backgroundPosition: center;

    @media screen and (max-width: 500px) {
      height:100%;
      padding-bottom: 10px;
    }
  }

  .pokedex{
    width: 825px;
    background: #ce372b;
    padding: 5px 0;
    border-radius: 50px;
    opacity: 0.9;
    margin: 4% auto;

    @media screen and (max-width: 500px) {
      width: 100%;
    }

    .inner-container {
      position: relative;
      top: 1%;
      left: 1%;
      height: 98%;
      width: 98%;
      border-radius: 50px;
      border: 1px solid #87241c;
      padding: 0.5rem;
      display: flex;

      @media screen and (max-width: 500px) {
        display: block;
      }
    }
  }

`