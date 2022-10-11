import styled from "styled-components";

export const AuthPageWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const ContentSection = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0;
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;
