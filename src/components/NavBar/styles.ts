import styled from "styled-components";
import { Menu } from "@headlessui/react";

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

  text-decoration: none;

  svg {
    width: 25px;
    height: 25px;
  }

  &:hover {
    background-color: rgb(var(--secondary-color));
  }

  &.activeButton {
    background-color: rgb(var(--secondary-color));
  }
`;

//Dropdown

export const DropdownMenuButton = styled(Menu.Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border-radius: 2px;
  padding: 0.6rem;
  background-color: rgb(var(--primary-color));
  color: rgb(var(--primary-00));

  outline: none;
  border: none;

  transition: all 0.3s;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(105%);
  }
`;

export const DropdownItens = styled(Menu.Items)`
  position: fixed;
  top: 0;
  right: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  padding: 4rem 2rem;

  background-color: rgb(var(--primary-00));
`;

export const DropdownMenuClose = styled.div`
  display: flex;
`;

export const DropdownMenuContent = styled.div`
  display: flex;
  flex-direction: column;
`;
