import { createContext, ReactNode, useState, Dispatch, SetStateAction, useEffect } from "react";
import { useEthers } from "@usedapp/core";

type PageType = "authPage" | "mainPage" | "helpPage" | "confirmationPage";

interface IPageProviderProps {
  children: ReactNode;
}

interface IPageContext {
  pageToRender: PageType;
  setPageToRender: Dispatch<SetStateAction<PageType>>;
  activeButton: string;
  setActiveButton: Dispatch<SetStateAction<string>>;
}

export const PageContext = createContext({} as IPageContext);

export default function PageProvider({ children }: IPageProviderProps) {
  const { account } = useEthers();
  const [activeButton, setActiveButton] = useState<string>("dashboard-btn");
  const [pageToRender, setPageToRender] = useState<PageType>("authPage");

  useEffect(() => {
    if (!account) {
      setPageToRender("authPage");
      return;
    }
    setPageToRender("mainPage");
  }, [account]);

  return <PageContext.Provider value={{ pageToRender, setPageToRender, activeButton, setActiveButton }}>{children}</PageContext.Provider>;
}
