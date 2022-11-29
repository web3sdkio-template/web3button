import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import GithubTriangle from "../components/GithubTriangle";
import Head from "next/head";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <Web3sdkioProvider desiredChainId={activeChainId}>
      <Head>
        <title>web3sdkio Web3Button</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="web3sdkio Example Repository to show how to use the Web3Button UI Component"
        />
      </Head>
      <Component {...pageProps} />
      <GithubTriangle />
    </Web3sdkioProvider>
  );
}

export default MyApp;
