import styled from 'styled-components';

export const Container = styled.div`
  position: fixed; /* fixado na tela, não no pai */
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.8);
  }

  span {
    z-index: 2;
  }
`;
