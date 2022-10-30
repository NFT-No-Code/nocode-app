import { useContext } from "react";

import AuthPage from "./pages/AuthPage";
import ConfirmationPage from "./pages/ConfirmationPage";
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
    case "confirmationPage":
      return <ConfirmationPage />;
  }
}

export default App;
