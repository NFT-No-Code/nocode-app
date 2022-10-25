import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppProviders from "./providers";
import { GlobalStyle } from "./styles/global";
import { Config, Mainnet, DAppProvider } from "@usedapp/core";
import { getDefaultProvider } from "ethers";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <DAppProvider config={config}>
      <AppProviders>
        <App />
      </AppProviders>
    </DAppProvider>
  </React.StrictMode>
);
