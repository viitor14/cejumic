import { styled, createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  :root{
    --toastify-icon-color-success: white;
    --toastify-icon-color-error: white;
  }

  * {
    margin:0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Poppins', 'sans-serif';
  }

  body{
    font-family: 'Poppins', 'sans-serif';
    background-color: ${colors.primaryColor};
    color: #000;
  }

  html, body, #root{
    height: 100%;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 10px;
  }

  a{
    display: flex;
    width: fit-content;
    text-decoration: none;
    color: #000;
    text-align: center;
  }

  ul {
    list-style: none;
  }

  //Mudar css do Toastify
  body .Toastify .Toastify__toast-container .Toastify__toast--success{
    background: blue;
    color: #fff;
  }

  .Toastify__progress-bar--success {
    background: white;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error{
    background: red;
    color: #fff;
  }

  .Toastify__progress-bar--error {
    background: white;
  }
`;

export const Container = styled.section`
  max-width: 360px;
  background-color: white;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const PageBackground = styled.div`
  width: 100%;
  height: 100%;
`;

export const DivMain = styled.div`
  padding: 16px;
`;

export const SectionMain = styled.section`
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding: 4px;
`;

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
