import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: var(--medGrey);
  color: var(--white);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;

  a{
    text-decoration: none;
  }

  span {
    font-size: 35px;
    color: var(--white);
    padding-right: 10px;
    text-transform: capitalize;
    font-family: 'VT323',monospace;
  }
`;