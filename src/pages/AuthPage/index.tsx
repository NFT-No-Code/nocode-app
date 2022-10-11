import Button from "../../components/Button";
import SideNav from "../../components/SideNav";
import * as S from "./styles";

export default function AuthPage() {
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
            <Button>🦊 Conectar carteira</Button>
            <Button>🙈 Não tenho carteira</Button>
          </S.ButtonGroup>
        </S.ActionGroup>
      </S.ContentSection>
    </S.AuthPageWrapper>
  );
}
