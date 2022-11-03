import SideNav from "../../components/NavBar";
import * as S from "./styles";
import { FaEthereum } from "react-icons/fa";
import { useContext, useState } from "react";
import { ConfirmationContext } from "../../providers/ConfirmationProvider";
import { toast } from "react-toastify";
import rb_logo from "../../assets/rb_logo.svg";
import os_logo from "../../assets/os_logo.svg";

export default function ConfirmationPage() {
  const { cloneEvent } = useContext(ConfirmationContext);
  const contractAddress = cloneEvent ? cloneEvent[0].args[0] : undefined;

  if (!contractAddress) {
    toast.warning("Erro ao obter o endereço do contrato. Verifique a transação manualmente na sua Metamask.");
  }

  return (
    <S.ConfirmationPageWrapper>
      <SideNav />
      <S.ConfirmationSection>
        <S.TitleWrapper>
          <h1>Parabéns! 🥳</h1>
          <div className="subtitle">
            <p>Você acabou de criar seu colecionável com sucesso!</p>
            <p>Abaixo estão as informações que você pode precisar.</p>
          </div>
        </S.TitleWrapper>
        <S.ContractAddressSection>
          <h2>Endereço do contrato:</h2>
          <p>A visualização é feita pelo etherscan, basta clicar no endereço para ser redirecionado.</p>
          <a href={`https://goerli.etherscan.io/address/${contractAddress}`} target="_blank">
            <FaEthereum />
            {contractAddress && `Ver confirmação no explorador de blocos - ${contractAddress}`}
          </a>
        </S.ContractAddressSection>
        <S.VisualizationSection>
          <h2>Links para visualização:</h2>
          <S.MarketplaceBtnContainer>
            <S.MarketplaceLink href={`https://testnets.opensea.io/assets/goerli/${contractAddress}/0`} target="_blank">
              <img src={os_logo} />
              OpenSea
            </S.MarketplaceLink>
            <S.MarketplaceLink href={`https://testnet.rarible.com/collection/${contractAddress}`} target="_blank">
              <img src={rb_logo} />
              Rarible
            </S.MarketplaceLink>
          </S.MarketplaceBtnContainer>
        </S.VisualizationSection>
      </S.ConfirmationSection>
    </S.ConfirmationPageWrapper>
  );
}
