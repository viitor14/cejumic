import styled from 'styled-components';

export const InputTypeDonate = styled.div`
  p {
    font-weight: 500;
  }

  div {
    border-radius: 10px;
    outline: none;
  }

  .inputSelect__control {
    background-color: #fff;
    color: #111;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: none !important;
    transition: none;
  }

  .inputSelect__control--is-focused {
    border-color: #ccc !important; /* mantém a borda cinza mesmo no foco */
    box-shadow: none !important;
  }

  .inputSelect__control:hover {
    border-color: rgba(209, 209, 209, 1);
  }

  .inputSelect__option--is-focused {
    border-color: #ccc !important;
    box-shadow: none !important;
  }

  .inputSelect__menu {
    padding: 0;
    margin-top: 0;
    border: 1px solid rgba(209, 209, 209, 1) !important;
  }

  .inputSelect__single-value {
    color: #111; /* cor do texto do item selecionado */
    background-color: transparent; /* geralmente é transparente mesmo */
  }
`;
