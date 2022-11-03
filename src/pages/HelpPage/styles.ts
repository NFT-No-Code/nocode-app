import styled from "styled-components";

export const HelpPageWrapper = styled.div`
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

export const HelpSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 4rem;

  height: 100%;

  padding: 3.5rem 4rem;

  h1 {
    margin: 0;
  }

  .videosContainer {
    overflow-y: auto;
    max-height: 100%;
  }
`;

export const TextCointainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 0.8rem;

  h2 {
    margin: 0;
    font-size: 1.4rem;
  }

  .videoWrapper {
    display: flex;
    justify-content: center;
    padding: 2rem;
    width: 100%;
    height: 100%;
  }

  iframe {
    /* width: calc(100% / (16 / 9)); */
    aspect-ratio: 16 / 9;
    border: 0;
    height: 100%;
    left: 0;
    top: 0;
  }
`;
