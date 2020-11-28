import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  align-items: center;
  height: 65px;
  padding: 0 20px;
`;

export const Content = styled.div`
  position: absolute;
  height: 55px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  padding: 5px;

  @media screen and (max-width: 500px) {
    display: inline-table;
  }

   :hover {
    input{
      width: 240px!important;
      padding: 0 6px;
    }

    img {
      -webkit-animation: rotate-center 0.6s ease-in-out both;
      animation: rotate-center 0.6s ease-in-out both;
          
      @-webkit-keyframes rotate-center {
        0% {
          -webkit-transform: rotate(0);
                  transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(360deg);
                  transform: rotate(360deg);
        }
      }
      @keyframes rotate-center {
        0% {
          -webkit-transform: rotate(0);
                  transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(360deg);
                  transform: rotate(360deg);
        }
      }
    }
    
   }

  img {
    display: flex;
    left: 15px;
    float: right;
    top: 14px;
    width: 45px;
    justify-content: center;
    align-items: center;
    transition: 0.4s;      
  }

  input {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
    font-weight: bold;
    font-size: 35px;
    font-family: 'VT323',monospace;

    :focus {
      outline: none;
    }
  }
`;