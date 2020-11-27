import styled from 'styled-components';
import Banner from '../../assets/images/map.png'


export const Wrapper = styled.div`
	background: url(${Banner});
	background-size: 100%, cover;
	background-position: center;
	height: 900px;
	position: relative;
	image-rendering: pixelated;    

	@media screen and (max-width: 500px) {
		background-size: auto;
		height: 480px;
	}

`;

export const Content = styled.div`
	padding-top: 10%;
	max-width: var(--maxWidth);
	margin: 0 auto;
	text-align: center;

	img{
		width: 300px;
	}

	.button{
		backface-visibility: hidden;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  background: rgba(0%,0%,0%,0);
  border-radius: 100px;
  border: 5px solid #fff;
  border-width: 5px 5px 5px 5px;
  padding: 3px 10px 2px 10px;
    color: #fff;
  font-size: 15px;
  font-family: Pretendo;
  font-weight: 200;
  font-style: normal;
  letter-spacing: 1px
	}
`;

export const Text = styled.div`
	z-index: 100;
	max-width: 700px;
	position: absolute;
	bottom: 40px;
	margin-right: 20px;
	min-height: 100px;
	color: var(--white);

	h1 {
		font-size: var(--fontSuperBig);

		@media screen and (max-width: 720px) {
			font-size: var(--fontBig);
		}
	}

	p {
		font-size: var(--fontMed);

		@media screen and (max-width: 720px) {
			font-size: var(--fontSmall);
		}
	}

	@media screen and (max-width: 720px) {
		max-width: 100%;
	}
`;