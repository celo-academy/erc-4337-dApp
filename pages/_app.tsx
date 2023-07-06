import type { AppProps } from "next/app";
import { ThirdwebProvider, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { CeloAlfajoresTestnet } from "@thirdweb-dev/chains";

// Celo Alfajores is where our wallet factory and NFT collection are deployed
const activeChain = "celo-alfajores-testnet";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThirdwebProvider
            activeChain={activeChain}
            supportedChains={[CeloAlfajoresTestnet]}
            // Define that we only want to support Account Abstraction wallets aka Smart Wallets
            supportedWallets={[
                smartWallet({
                    // View my Factory Contract: https://thirdweb.com/celo-alfajores-testnet/0x7FDaA334E6A515dF22583c5dfe78B302a3dfE3F8
                    // Deploy your own Factory: https://thirdweb.com/thirdweb.eth/AccountFactory
                    factoryAddress:
                        "0x7FDaA334E6A515dF22583c5dfe78B302a3dfE3F8",

                    // Gasless mode on: means the smart wallet does not need to be funded with any ETH / MATIC.
                    gasless: true,

                    // API Key from the thirdweb dashboard. (You'll want to keep yours a secret)
                    thirdwebApiKey: process.env.THIRDWEB_API_KEY as string,
                }),
            ]}
        >
            <Component {...pageProps} />
        </ThirdwebProvider>
    );
}

export default MyApp;
