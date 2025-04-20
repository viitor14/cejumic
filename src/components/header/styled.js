import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  pointer-events: none;
`;

export const MenuNavigation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: #fff;
  transition: width 0.3s ease-in-out;
  z-index: 1000;
  padding-left: 14px;
`;

export const Navigate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  font-weight: 500;
  .boxLogo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 40px;
    border-bottom: 2px solid rgba(225, 225, 225, 1);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 0;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

export const ItemsNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  img {
    width: 30px;
    height: 30px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 21px;
  }

  a {
    font-size: 14px;
  }
`;

export const ItemAdm = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border-top: 2px solid rgba(225, 225, 225, 1);
  padding: 20px 0;
  img {
    width: 30px;
    height: 30px;
  }

  div {
  }

  p:first-child {
    font-size: 12px;
    font-weight: 600;
  }

  p:last-child {
    font-size: 10px;
    font-weight: 400;
    color: rgba(114, 114, 120, 1);
  }
`;

export const Head = styled.header`
  display: flex; /* flex */
  align-items: center; /* items-center */
  justify-content: space-between; /* justify-between */
  padding: 1rem; /* p-4 (1rem = 16px) */
  background-color: white; /* bg-white */
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */

  .menuIcon {
    width: 32px;
    height: 32px;
  }

  .notification {
    height: 2rem;
    width: 1.8rem;
  }
`;

export const Container = styled.div`
  max-width: 100%; /* container (por padrão, o container do Tailwind tem largura máxima responsiva) */
  padding: 16px; /* p-4 (1rem = 16px) */
  margin-left: auto;
  margin-right: auto;

  .lupa {
    display: flex; /* flex */
    align-items: center; /* items-center */
    padding: 0.5rem; /* p-2 (0.5rem = 8px) */
    margin-left: auto; /* mx-auto */
    margin-right: auto; /* mx-auto */
    background-color: #f3f4f6; /* bg-gray-100 */
    border-radius: 9999px; /* rounded-full */
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
    max-width: 16rem; /* max-w-64 (16rem = 256px) */
  }

  .searchIcon {
    width: 1.25rem; /* w-5 (1.25rem = 20px) */
    height: 1.25rem; /* h-5 (1.25rem = 20px) */
    margin-left: 0.5rem;
  }

  .barraPesquisa {
    flex-grow: 1; /* flex-grow */
    padding-left: 1rem; /* px-4 (1rem = 16px) */
    padding-right: 1rem; /* px-4 (1rem = 16px) */
    padding-top: 1px; /* py-px (1px) */
    padding-bottom: 1px; /* py-px (1px) */
    background-color: transparent;
    border: none;
  }

  .barraPesquisa:focus {
    outline: none;
  }
`;
