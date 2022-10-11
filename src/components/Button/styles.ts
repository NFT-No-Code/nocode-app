import styled from "styled-components";

export const MainButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.9rem;
  border: none;
  outline: none;
  border-radius: 5px;

  background-color: rgb(var(--primary-color));
  color: rgb(var(--primary-00));

  font-size: 0.9rem;
  font-weight: 600;

  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }
`;
