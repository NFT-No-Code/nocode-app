import * as dotenv from "dotenv";
dotenv.config();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppProviders from "./providers";
import { GlobalStyle } from "./styles/globalStyle";
import { Config, DAppProvider, Goerli } from "@usedapp/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ALCHEMY_KEY = process.env.PROVIDER_API_KEY;

const providerConfig: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_KEY}`,
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ToastContainer position="top-left" />
    <DAppProvider config={providerConfig}>
      <AppProviders>
        <App />
      </AppProviders>
    </DAppProvider>
  </React.StrictMode>
);
