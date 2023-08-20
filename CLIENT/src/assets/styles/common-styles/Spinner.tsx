import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
from{
transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`;

export const Spinner = styled.div`
  height: 40px;
  width: 40px;
  border: 2px solid #f1b04e;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 0.5s linear infinite;
  z-index: 100000000;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
`;
