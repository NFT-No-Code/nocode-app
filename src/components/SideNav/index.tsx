import { useContext } from "react";
import * as S from "./styles";
import logo from "../../assets/colecionavel.digital.png";
import { MdDashboard, MdHelpCenter } from "react-icons/md";
import { RiHomeFill } from "react-icons/ri";
import { PageContext } from "../../providers/PageProvider";
import { useEthers } from "@usedapp/core";

export default function SideNav() {
  const { setPageToRender, activeButton, setActiveButton } = useContext(PageContext);
  const { account } = useEthers();

  return (
    <S.MenuWrapper>
      <S.MenuImage>
        <img src={logo} alt="Logotipo da colecionavel.digital" />
      </S.MenuImage>
      <S.MainButtonsContainer>
        <S.NavButton
          className={activeButton === "dashboard-btn" ? "activeButton" : ""}
          onClick={() => {
            account ? setPageToRender("mainPage") : setPageToRender("authPage");
            setActiveButton("dashboard-btn");
          }}
          id="dashboard-btn"
        >
          <MdDashboard />
          Dashboard
        </S.NavButton>
        <S.NavButton
          className={activeButton === "help-btn" ? "activeButton" : ""}
          onClick={() => {
            setActiveButton("help-btn");
            setPageToRender("helpPage");
          }}
          id="help-btn"
        >
          <MdHelpCenter />
          Ajuda
        </S.NavButton>
      </S.MainButtonsContainer>
      <hr />
      <S.HomeButtonContainer>
        <S.NavButton as="a" href="https://colecionavel.digital" target="_blank">
          <RiHomeFill />
          Início
        </S.NavButton>
      </S.HomeButtonContainer>
    </S.MenuWrapper>
  );
}
