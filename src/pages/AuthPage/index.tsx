import { useEthers } from "@usedapp/core";
import { useContext } from "react";
import Button from "../../components/Button";
import SideNav from "../../components/SideNav";
import { PageContext } from "../../providers/PageProvider";
import { isRpcError } from "../../utils";
import * as S from "./styles";

export default function AuthPage() {
  const { setPageToRender } = useContext(PageContext);
  const { activateBrowserWallet } = useEthers();

  const handleWalletConnect = async () => {
    try {
      await activateBrowserWallet();
    } catch (err) {
      if (isRpcError(err)) {
        if (err.code === -32002) {
          alert("Please authenticate your wallet.");
          return;
        }
      }
      console.error(err);
    }
  };

  return (
    <S.AuthPageWrapper>
      <SideNav />
      <S.ContentSection>
        <S.MainTextGroup>
          <h1>Bem-vindo(a) a colecionavel.digital!</h1>
          <p>Preencha os campos, escolha os arquivos, confirme, e pronto! NFT em mãos 🤯</p>
        </S.MainTextGroup>
        <S.ActionGroup>
          <p>Você precisará de uma carteira para utilizar o serviço.</p>
          <S.ButtonGroup>
            <Button onClick={() => handleWalletConnect()}>🦊 Conectar carteira</Button>
            <Button onClick={() => setPageToRender("helpPage")}>🙈 Não tenho carteira</Button>
          </S.ButtonGroup>
        </S.ActionGroup>
      </S.ContentSection>
    </S.AuthPageWrapper>
  );
}
