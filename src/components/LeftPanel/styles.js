import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 360px;
  border: 2px solid #b31818;
  border-radius: 50px;
  text-align: center;

  .random{
    width: 30px;
    border: 2px solid #b31818;
    border-radius: 20px;
    padding: 2px;
    /* display: flex; */
    margin: 4px auto;
    cursor: pointer;
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

export const Text = styled.div`
	width: 100%;
	padding: 0 40px;
	color: var(--white);
	overflow: hidden;

	h1 {
    background: #a5cd53;
    padding: 20px;
    border-radius: 50px;
    /* font-family: "VT323"; */
    padding: 15px;
    font-size: 28px;
    -webkit-letter-spacing: 4px;
    -moz-letter-spacing: 4px;
    -ms-letter-spacing: 4px;
    letter-spacing: 4px;
    text-transform: capitalize;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: center;
    font-family: 'VT323',monospace;
    color: black;
    font-size: 45px;

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
  margin: 20px 20px;
  min-height: 200px;

  img{
    width: 90px;
    image-rendering: pixelated;
  }

  .animatedSprite{
    width: 60px;
  }

		@media screen and (max-width: 768px) {
			font-size: var(--fontBig);
		}
  }
`;