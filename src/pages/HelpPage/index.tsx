import SideNav from "../../components/SideNav";
import * as S from "./styles";

export default function HelpPage() {
  return (
    <S.HelpPageWrapper>
      <SideNav />
      <S.HelpSection>
        <S.TextCointainer>
          <h1>🖼️ Criando seu colecionável</h1>
          <p>
            Você precisará do endereço de sua carteira Metamask e do(s) arquivo(s) para seus colecionáveis. Com isso, clique no botão de
            Conectar Metamask e autorize a conexão. Feito isso, você terá acesso à área de criação. Basta preencher os campos, revisá-los e
            confirmar a criação, logo após você terá acesso às informações de confirmação. A partir daí, é só comemorar!
          </p>
        </S.TextCointainer>
        <S.VideoContainer>
          <h2>Passo a passo completo em vídeo:</h2>
          <p>Tutorial de como criar sua carteira e criar seu primeiro NFT com a colecionavel.digital</p>
          <div className="videoWrapper">
            <iframe src="https://www.youtube.com/embed/dUoOtaK_Fog" allowFullScreen></iframe>
          </div>
        </S.VideoContainer>
      </S.HelpSection>
    </S.HelpPageWrapper>
  );
}
