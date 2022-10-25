import { useContext } from "react";

import AuthPage from "./pages/AuthPage";
import HelpPage from "./pages/HelpPage";
import MainPage from "./pages/MainPage";
import { PageContext } from "./providers/PageProvider";

function App() {
  const { pageToRender } = useContext(PageContext);

  switch (pageToRender) {
    case "authPage":
      return <AuthPage />;
    case "helpPage":
      return <HelpPage />;
    case "mainPage":
      return <MainPage />;
  }
}

export default App;
