import type { AppProps } from "next/app";
import { ThirdwebProvider, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { CeloAlfajoresTestnet } from "@thirdweb-dev/chains";

// Mumbai is where our wallet factory and NFT collection are deployed
const activeChain = "celo-alfajores-testnet";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThirdwebProvider
            activeChain={activeChain}
            supportedChains={[CeloAlfajoresTestnet]}
            // Define that we only want to support Account Abstraction wallets aka Smart Wallets
            supportedWallets={[
                smartWallet({
                    // View my Factory Contract: https://thirdweb.com/mumbai/0x69608a6fE2e1Ce34eAcC4688502b2a2A1209EE2c
                    // Deploy your own Factory: https://thirdweb.com/thirdweb.eth/AccountFactory
                    factoryAddress:
                        "0x7FDaA334E6A515dF22583c5dfe78B302a3dfE3F8",

                    // Gasless mode on: means the smart wallet does not need to be funded with any ETH / MATIC.
                    gasless: true,

                    // API Key from the thirdweb dashboard. (You'll want to keep yours a secret)
                    thirdwebApiKey:
                        "062d6f2ff548b8df07d2cc215d60df0d6ab17e19b6250c6f5d3fa53706b6888e41f34b51f9d7f73f956137b4ebaf4bff095aea43969eda40fb7ad713772e8242",
                }),
            ]}
        >
            <Component {...pageProps} />
        </ThirdwebProvider>
    );
}

export default MyApp;
