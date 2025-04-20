import styled from 'styled-components';

export const Box = styled.div`
  padding: 24px; /* p-6 */
  margin-top: 20px; /* mt-5 */
  background-color: #ffffff; /* bg-white */
  border-radius: 8px; /* rounded-lg */
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 18px; /* text-lg */
    font-weight: 600; /* font-semibold */
    color: #1f2937;
  }

  img {
    width: 48px; /* w-12 */
    height: 48px;
  }
`;

export const BoxContainerDados = styled.div`
  display: flex;
  align-items: baseline; /* items-baseline */
  margin-top: 16px;

  p:first-child {
    font-size: 36px; /* text-4xl */
    font-weight: 700; /* font-bold */
    color: #111827;
  }

  p:last-child {
    margin-left: 12px; /* ml-3 */
    font-size: 20px; /* text-xl */
    font-weight: 500; /* font-medium */
    color: #10b981;
  }
`;
