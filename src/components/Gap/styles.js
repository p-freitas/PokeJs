import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 30px;
  display: flex;
  margin: 0 20px;

  @media screen and (max-width: 500px) {
    width: 100%;
    display: contents;
  }
`;

export const Divisor = styled.div`
  width: 5px;
  border: 0.5px solid #87241c;
  height: 100%;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 2px;
    margin: 4px 0;
  }
`;