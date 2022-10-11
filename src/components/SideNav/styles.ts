import styled from "styled-components";

export const MenuWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 1.5rem;

  height: 100%;

  background-color: rgb(var(--primary-color));

  hr {
    width: 100%;
    height: 1px;
    margin: 0;

    background-color: rgb(var(--primary-00));
    border: 0;
  }
`;

export const MenuImage = styled.figure`
  display: flex;
  width: 10rem;
  margin: 0;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const MainButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HomeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  padding: 0.7rem;
  border: none;
  outline: none;
  border-radius: 5px;

  color: rgb(var(--primary-00));
  background-color: transparent;

  font-size: 1.1rem;
  font-weight: 500;

  transition: all 0.3s;
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
  }

  &:hover {
    background-color: rgb(var(--secondary-color));
  }
`;
