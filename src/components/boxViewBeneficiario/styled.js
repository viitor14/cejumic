import styled from 'styled-components';

export const DivStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;

  .Ativo {
    background: ${({ selected }) =>
      selected === 'Ativo' ? 'rgb(4, 172, 119)' : '#d1fae5'} !important;
    color: ${({ selected }) => (selected === 'Ativo' ? '#fff' : 'rgba(5, 150, 105, 1)')} !important;
    border: none;
  }

  .Inativo {
    background: ${({ selected }) =>
      selected === 'Inativo' ? 'rgba(236, 54, 85, 1)' : '#ffe4e6'} !important;
    color: ${({ selected }) =>
      selected === 'Inativo' ? '#fff' : 'rgba(236, 54, 85, 1)'} !important;
    border: none;
  }
`;
