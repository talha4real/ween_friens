import "./App.css";
import { useEffect, useMemo } from "react";
import * as anchor from "@project-serum/anchor";
import Home from "./Home";
import { DEFAULT_TIMEOUT } from "./connection";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { Route, Routes } from "react-router-dom";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

import { ThemeProvider, createTheme } from "@material-ui/core";
import MadBanga from "./component/Madbangali";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    const candyMachineId = new anchor.web3.PublicKey(
      "Ate4k923HutshtKvH32kBr7MfCTaxP7Xrj1v5gAxKg92"!
    );

    return candyMachineId;
  } catch (e) {
    console.log("Failed to construct CandyMachineId", e);
    return undefined;
  }
};

const candyMachineId = getCandyMachineId();
const network = "mainnet-beta" as WalletAdapterNetwork;
const rpcHost = "https://api.mainnet-beta.solana.com"!;
const connection = new anchor.web3.Connection(
  rpcHost ? rpcHost : anchor.web3.clusterApiUrl("devnet")
);

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    []
  );

  useEffect(() => {
    console.log("iframe here", document.querySelector("iframe"));
    setTimeout(() => {
      document.querySelector("iframe")?.remove();
    }, 500);
  });

  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    candyMachineId={candyMachineId}
                    connection={connection}
                    txTimeout={DEFAULT_TIMEOUT}
                    rpcHost={rpcHost}
                    network={network}
                  />
                }
              />
              <Route path="/dashboard" element={<MadBanga />} />
            </Routes>
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};

export default App;
