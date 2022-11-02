import styled from "styled-components";

export const ConfirmationPageWrapper = styled.div`
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

  h2 {
    font-size: 1.15rem;
    margin: 0;
  }
`;

export const ConfirmationSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 3rem;

  height: 100%;

  padding: 3.5rem 4rem;

  h1 {
    margin: 0;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &.subtitle {
    display: flex;
    flex-direction: column;
  }
`;

export const ContractAddressSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-family: Poppins;
    font-size: 0.9rem;
  }

  a {
    color: #fff;

    svg {
      width: 0.9rem;
      height: 0.9rem;
    }
  }
`;

export const VisualizationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  p {
    font-family: Poppins;
    font-size: 0.9rem;
  }
`;

export const MarketplaceBtnContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

export const MarketplaceLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  background-color: #fff;
  color: #000;
  font-weight: 600;
  font-size: 1.2rem;
  font-family: Poppins;
  text-decoration: none;

  padding: 0.5rem 1rem;
  border-radius: 4px;

  transition: all 0.3s;

  img {
    width: 40px;
    height: 40px;
  }

  &:hover {
    transform: scale(105%);
  }
`;
