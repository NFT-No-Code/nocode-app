import * as S from "./styles";
import logo from "../../assets/colecionavel.digital.png";
import { MdDashboard, MdHelpCenter } from "react-icons/md";
import { RiHomeFill } from "react-icons/ri";

export default function SideNav() {
  return (
    <S.MenuWrapper>
      <S.MenuImage>
        <img src={logo} alt="Logotipo da colecionavel.digital" />
      </S.MenuImage>
      <S.MainButtonsContainer>
        <S.NavButton>
          <MdDashboard />
          Dashboard
        </S.NavButton>
        <S.NavButton>
          <MdHelpCenter />
          Ajuda
        </S.NavButton>
      </S.MainButtonsContainer>
      <hr />
      <S.HomeButtonContainer>
        <S.NavButton>
          <RiHomeFill />
          Início
        </S.NavButton>
      </S.HomeButtonContainer>
    </S.MenuWrapper>
  );
}
