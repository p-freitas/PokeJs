import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  backface-visibility: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;
  margin: 20px auto;
  height: 60px;
  background: rgba(0%,0%,0%,0);
  border-radius: 100px;
  border: 5px solid #da6767;
    border-width: 5px 5px 5px 5px;
    padding: 3px 10px 2px 10px;
    color: #da6767;
  font-size: 25px;
  font-family: 'VT323',monospace;
  font-weight: 200;
  font-style: normal;
  letter-spacing: 1px;

  :hover {
    opacity: 0.8;
  }
`;