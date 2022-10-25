import styled from "styled-components";

export const AuthPageWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 100vh;

  p {
    margin: 0;
  }
`;

export const ContentSection = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const MainTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  h1 {
    margin: 0;
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;
