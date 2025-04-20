import styled from 'styled-components';

export const SectionTop = styled.section`
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding-bottom: 21px;

  button {
    display: flex;
    align-items: center;
    gap: 5px;
    background: rgba(0, 128, 255, 1);
    //min-width: 40px;
    width: fit-content;
    //height: 40px;
    border-radius: 10px;
    font-size: 12px;
    color: rgb(255, 255, 255);
    padding: 8px 10px;
  }
  .iconPlus {
    height: 20px;
    width: 20px;
  }
`;

export const SearchBar = styled.div`
  max-width: 100%; /* container (por padrão, o container do Tailwind tem largura máxima responsiva) */
  border: 1px solid rgba(209, 209, 209, 1);
  border-radius: 10px;
  .lupa {
    display: flex; /* flex */
    align-items: center; /* items-center */
    padding: 0.5rem; /* p-2 (0.5rem = 8px) */
    background-color: #f3f4f6; /* bg-gray-100 */
    border-radius: 9999px; /* rounded-full */
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
    max-width: 100%; /* max-w-64 (16rem = 256px) */
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

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 100%;

  .teste {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: red;
    width: 50%;
    height: auto;
    border: 1px solid rgba(209, 209, 209, 1);
    border-radius: 10px;
  }

  button {
    display: flex;
    align-items: center;
    background: none;
    justify-content: space-evenly;
    width: 100%;
  }

  img {
    width: 1.1rem;
    height: 1.1rem;
  }
`;

export const Introduction = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 16px;
  }

  img {
    width: 48px;
    height: 48px;
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.25rem; /* 20px */
    font-weight: bold;
    color: #1f2937;
  }

  p {
    font-size: 12px;
    color: #4b5563;
  }
`;
