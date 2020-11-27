import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  background: #a5cd53;
  padding: 25px 20px;;
  border-radius: 50px;
  font-size: 14px;
  -webkit-letter-spacing: 0;
  -moz-letter-spacing: 0;
  -ms-letter-spacing: 0;
  -webkit-letter-spacing: 0;
  -moz-letter-spacing: 0;
  -ms-letter-spacing: 0;
  letter-spacing: 0;
  -webkit-flex: 1;
  -ms-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 4px 6px;
  min-height: 200px;

  .progress{
    background-color: #e9ecef;
    height: 16px;
  }

  .progress-bar{
    animation: progressBar1 1.5s ease-in-out;
    animation-fill-mode:forwards; 
    height: 16px;

    small{
      @media screen and (max-width: 500px) {
        font-size: 15px;
        display: block;
      }
    }
  }

  @keyframes progressBar1 {
    0% { width: 0; }
    
  }

  h4 {
    margin:0;
    color: black;
    text-transform: uppercase;
    font-family: 'VT323',monospace;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: var(--fontBig);
  }
}
`; 