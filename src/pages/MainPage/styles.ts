import styled from "styled-components";

export const MainPageWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 100vh;

  p {
    margin: 0;
    font-family: Lora;
    font-weight: 500;
    font-size: 1rem;
    color: rgb(var(--secondary-color), 0.85);
  }
`;

export const CreationSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;

  height: 100%;

  padding: 3.5rem 4rem;

  h1 {
    margin: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const FormContainer = styled.div`
  display: flex;
  height: 100%;

  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 5rem;
  }

  h2 {
    background-color: rgb(var(--primary-color));
    color: rgb(var(--primary-00));
    padding: 0.2rem 0.5rem;
    font-size: 1.1rem;
    width: fit-content;
  }
`;

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.8rem;
`;

export const CollectibleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.8rem;
`;

export const ConfirmSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 0.5rem;

  p {
    font-family: Poppins;
    text-align: center;
  }
`;

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background-color: #14ff00;
  color: #000000;

  outline: 0;
  border: 0;

  font-size: 1rem;
  font-weight: 600;

  border-radius: 5px;
  padding: 0.8rem;

  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(101%);
  }
`;
