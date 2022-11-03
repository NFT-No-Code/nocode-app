import { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import logo from "../../assets/colecionavel.digital.png";
import { MdDashboard, MdHelpCenter } from "react-icons/md";
import { RiHomeFill } from "react-icons/ri";
import { PageContext } from "../../providers/PageProvider";
import { useEthers } from "@usedapp/core";
import { Menu } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  const { setPageToRender, activeButton, setActiveButton } = useContext(PageContext);
  const { account } = useEthers();
  const [showDropdown, setShowDropdown] = useState<boolean>(window.innerWidth < 1140);

  const updateWidth = () => {
    if (window.innerWidth < 1140) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      {showDropdown ? (
        <Menu>
          <S.DropdownMenuButton>
            <GiHamburgerMenu />
          </S.DropdownMenuButton>
          <S.DropdownItens>
            <S.DropdownMenuClose>
              <Menu.Item>
                <button>X</button>
              </Menu.Item>
            </S.DropdownMenuClose>
            <S.DropdownMenuContent>
              <Menu.Item>
                <div>Dashboard</div>
              </Menu.Item>
              <Menu.Item>
                <div>Ajuda</div>
              </Menu.Item>
              <Menu.Item>
                <div>Início</div>
              </Menu.Item>
            </S.DropdownMenuContent>
          </S.DropdownItens>
        </Menu>
      ) : (
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
      )}
    </>
  );
}
