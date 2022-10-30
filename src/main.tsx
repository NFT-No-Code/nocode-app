import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppProviders from "./providers";
import { GlobalStyle } from "./styles/globalStyle";
import { Config, DAppProvider, Goerli } from "@usedapp/core";
import { getDefaultProvider } from "ethers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: getDefaultProvider("goerli"),
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ToastContainer position="top-left" />
    <DAppProvider config={config}>
      <AppProviders>
        <App />
      </AppProviders>
    </DAppProvider>
  </React.StrictMode>
);
