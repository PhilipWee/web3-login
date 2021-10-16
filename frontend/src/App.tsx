import React, { useEffect } from 'react';
import Web3 from 'web3'
import bsc from "@binance-chain/bsc-use-wallet"
import { useWallet, UseWalletProvider } from 'use-wallet'
import {useWeb3React, Web3ReactProvider} from "@web3-react/core"
import {InjectedConnector} from "@web3-react/injected-connector"
import { signIn } from './sign-in';

const injected = new InjectedConnector({
  supportedChainIds:[1,3,4,5,42]
})


function App() {

  // const { active, account, library, connector, activate, deactivate } = useWeb3React()


  // const wallet = useWallet()

  // const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546") //Presuming this localhost:8546 is a default

  // console.log(wallet.isConnected())
  // console.log(account)

  // async function connect() {
  //   try {
  //     await activate(injected)
  //     console.log("Activation Success")
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  // async function disconnect() {
  //   try {
  //     await deactivate()
  //     console.log("Deactivation Success")
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  signIn()

  return (
    <div>
      Hello World
      {/* <button onClick = {connect}>Connect Wallet</button>
      <button onClick = {disconnect}>Disconnect Wallet</button> */}
    </div>
  );
}


export default function AppWrapper() {
  return <App/>
  // return <UseWalletProvider
  //   connectors={{
  //     // This is how connectors get configured
  //     portis: { dAppId: '63c6f218-0ed4-431d-9533-2d7b6586a5ff' },
  //   }}>
  //   <App />
  // </UseWalletProvider>

};
