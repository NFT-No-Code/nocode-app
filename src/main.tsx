import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppProviders from "./providers";
import { GlobalStyle } from "./styles/global";
import { Config, Mainnet, DAppProvider, Goerli } from "@usedapp/core";
import { getDefaultProvider } from "ethers";
import { ToastContainer } from "react-toastify";

const config: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    // [Mainnet.chainId]: getDefaultProvider("mainnet"),
    [Goerli.chainId]: getDefaultProvider("goerli"),
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer />
    <GlobalStyle />
    <DAppProvider config={config}>
      <AppProviders>
        <App />
      </AppProviders>
    </DAppProvider>
  </React.StrictMode>
);
