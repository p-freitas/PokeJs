import styled from 'styled-components';
import VT323Font from '../../assets/Fonts';
import VT323 from '../../assets/Fonts/VT323-Regular.ttf'

export const Wrapper = styled.div`
  border-radius: 50px;
  margin-bottom: 15px;

  .stats{
    display: flex;
    border-bottom: groove #87241c 1px;
    margin: 5px;
    justify-content: center;

    @media screen and (max-width: 500px) {
      margin: -2px;
    }
  }
`;

export const Content = styled.div`
	display: flex;
	max-width: var(--maxWidth);
	margin: 0 auto;
	background: rgba(0, 0, 0, 0.7);
	border-radius: 20px;

	@media screen and (max-width: 768px) {
		display: block;
		max-height: none;
	}
`;

export const TextAltura = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  image-rendering: pixelated;
  border-radius: 50%;
  margin: 10px 0;
  background: #cad5b5;
  border-radius: 50px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 10px 20px;
  text-transform: capitalize;
  
  h4{
    margin: 0;
    font-family: 'VT323', monospace;
    font-size: 20px;
  }

		@media screen and (max-width: 768px) {
			font-size: var(--fontBig);
		}
  }
`;

export const Types = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 10px 20px;
  text-transform: capitalize;
  text-align: center;
  font-family: 'VT323', monospace;
  font-size: 20px

		@media screen and (max-width: 768px) {
			font-size: var(--fontBig);
		}
  }
`;

export const Sprites = styled.div`
  text-align: center;
  background: #a5cd53;
  padding: 20px;
  border-radius: 50px;
  font-size: 16px;
  -webkit-letter-spacing: 0;
  -moz-letter-spacing: 0;
  -ms-letter-spacing: 0;
  letter-spacing: 0;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 20px 5px;
  min-height: 200px;

		@media screen and (max-width: 768px) {
			font-size: var(--fontBig);
		}
  }
`; 

export const Abilities = styled.div`
  background: #a5cd53;
  padding: 20px;
  border-radius: 50px;
  font-family: "VT323";
  width: 90%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 5px;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  align-items: center;
  font-family: 'VT323', monospace;

  .flex{
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .move  p{
    margin: 0;
    font-size: 14px;
  }

  .move-name{
    font-size: 25px;
    border-bottom: solid black 2px;
    margin-bottom: 3px;
    text-align: center;
    text-transform: capitalize;
  }

		@media screen and (max-width: 768px) {
			font-size: var(--fontBig);
		}
  }
`;