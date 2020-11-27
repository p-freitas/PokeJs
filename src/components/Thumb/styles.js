import styled from 'styled-components';
import Bush from '../../assets/images/bush-p.png';

export const Wrapper = styled.div`
  font-family: 'VT323', monospace;

  :hover {
    background-image: url('${Bush}');
    background-repeat: no-repeat;
    background-position: bottom;
    animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, animatedBackground 0.8s;
    
    @keyframes animatedBackground {
      from {
        background-position: 50% 150px;
      }
      to {
        background-position: 50% 100%;
      }

    }

    @-webkit-keyframes slide-top {
      0% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
      }
      100% {
        -webkit-transform: translateY(-10px);
                transform: translateY(-10px);
      }
    }
    @keyframes slide-top {
      0% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
      }
      100% {
        -webkit-transform: translateY(-10px);
                transform: translateY(-10px);
      }
    }
    
  }

  h1{
    text-transform: capitalize;
  }
`;

export const Image = styled.img`
  height: 60px;
  
  
  `;