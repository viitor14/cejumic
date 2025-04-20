import styled from 'styled-components';

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  font-size: 12px;
  width: 100%;

  .boxInput {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;

    p {
      font-weight: 500;
    }

    input {
      border: 1px solid rgba(209, 209, 209, 1);
      border-radius: 10px;
      padding: 8px 6px;
      width: 100%;

      :focus {
        outline: none;
      }

      &[type='date'] {
        font-family: 'Poppins', sans-serif;
        color: rgba(177, 177, 177, 1);
        font-size: 12px;
      }
    }
    input::placeholder {
      color: rgba(177, 177, 177, 1);
      font-size: 12px;
    }

    input[type='date']::-webkit-calendar-picker-indicator {
      filter: invert(50%); /* Altera a cor do ícone */
      cursor: pointer;
    }
  }
`;
