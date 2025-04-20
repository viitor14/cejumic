import styled from 'styled-components';

export const BoxInputGetData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  font-size: 12px;
  width: 100%;

  .titleBox {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;

    img {
      width: 20px;
      height: 20px;
    }
  }

  .boxTextArea {
    width: 100%;

    p {
      font-weight: 500;
    }

    textarea {
      height: 100px;
      width: 100%; /* Opcional, para dar largura total */
      border: 1px solid rgba(209, 209, 209, 1);
      border-radius: 10px;
      padding: 8px 6px;
    }

    textarea::placeholder {
      font-family: 'Poppins', sans-serif !important ;
      font-size: 12px;
      font-weight: 400;
      color: rgba(177, 177, 177, 1);
    }
  }
`;

export const FormAddBeneficiario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 21px;
  .actionsForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    button:first-child {
      color: #fff;
      background: rgba(0, 128, 255, 1);
      text-align: center;
      padding: 12px 85px;
      font-weight: 400;
    }

    a {
      border: 1px solid rgba(0, 0, 0, 0.2);
      font-weight: 500;
      font-size: 12px;
      padding: 6px 80px;
      border-radius: 10px;
    }
  }
`;
