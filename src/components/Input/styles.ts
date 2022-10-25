import styled from "styled-components";

interface IInputWrapper {
  error: object | undefined;
}

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 0.95rem;
    color: rgba(var(--secondary-color), 0.85);

    span {
      font-weight: 500;
      color: #ff0000;
    }
  }

  .errorMessage {
    font-family: Poppins;
    font-size: 0.8rem;
    color: #ff0000;
  }
`;

export const InputWrapper = styled.div<IInputWrapper>`
  display: flex;
  align-items: center;

  background-color: rgb(var(--secondary-color));

  border-radius: 5px;
  outline: ${(props) => (props.error ? "2px solid #ff0000" : "none")};
  transition: all 0.3s;

  svg {
    visibility: ${(props) => (props.error ? "visible" : "hidden")};
    color: #ff0000;
    margin-right: 0.5rem;
  }
`;

export const CustomInput = styled.input`
  width: 100%;

  background-color: transparent;
  color: rgb(var(--primary-00));

  border-radius: 5px;
  padding: 0.6rem;

  outline: none;
  border: none;

  font-family: Poppins;
  font-size: 0.9em;

  transition: all 0.1s;
`;
