import styled from 'styled-components';

export const DivInputRadio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  font-weight: 500;
  div {
    display: flex;
    flex-wrap: wrap;

    label {
      display: flex;
      align-items: center;
      gap: 2px;
      width: 33.33%;
      margin-bottom: 10px;

      input {
        border: 1px solid red;
      }
    }
  }
`;
