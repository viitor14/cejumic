import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(0, 128, 255, 1);
  border-radius: 10px;
  padding: 44px 25px;
  gap: 21px;

  .divLogo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 6px;

    img {
      width: 50px;
      height: 50px;
    }

    h1 {
      font-size: 18px;
    }

    p {
      color: rgba(113, 113, 122, 1);
      font-weight: 400;
      font-size: 10px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 21px;
    width: 100%;

    label {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 12px;
      font-weight: 500;
    }

    input {
      border: 1px solid rgba(209, 209, 209, 1);
      border-radius: 10px;
      outline: none;
      height: 30px;
      width: 100%;
      padding: 8px 10px;
    }

    button {
      font-size: 10px;
      font-weight: 700;
      background-color: rgba(0, 128, 255, 1);
      color: #fff;
      padding: 10px 100px;
      text-align: center;
    }
  }
`;
