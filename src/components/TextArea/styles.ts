import styled from "styled-components";

interface ITextAreaWrapper {
  error: object | undefined;
}

export const AreaGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 0.95rem;
    color: rgba(var(--secondary-color), 0.85);
  }

  .errorMessage {
    font-family: Poppins;
    font-size: 0.8rem;
    color: #ff0000;
  }
`;

export const TextAreaWrapper = styled.div<ITextAreaWrapper>`
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

export const CustomTextArea = styled.textarea`
  width: 100%;

  background-color: rgb(var(--secondary-color));
  color: rgb(var(--primary-00));

  border-radius: 5px;
  padding: 0.6rem;

  outline: none;
  border: none;

  font-family: Poppins;
  font-size: 0.9em;

  transition: all 0.1s;
  resize: none;
`;
