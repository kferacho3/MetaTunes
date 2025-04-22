import Web3 from 'web3'
import Onboard from 'bnc-onboard'


//Function that prompts user to connect wallet and returns wallet address and provider (eg. metamask, coinbase, etc) of connected wallet. 
//Returns web3 object (which can be used in future to make transactions, etc), wallet address, and provider name (metamask, coinbase, etc).
const connectWallet = async () => {
	let web3;
	let provider;

	const onboard = Onboard({
	  networkId: 1,  // [Integer] The Ethereum network ID your Dapp uses (1 is for mainnet).
	  darkMode: true,
	  subscriptions: {
	    wallet: wallet => {
	    	provider = wallet.name
	      	web3 = new Web3(wallet.provider)
	    }
	  }
	});

	const walletSelected = await onboard.walletSelect();
    if (walletSelected == true) {
      const walletReady = await onboard.walletCheck();
      if (!walletReady) {
      	return "User didnt select a wallet address."
      }
    } else {
    	return "User did not approve wallet connection."
    }

    let walletAddress = (await web3.eth.getAccounts())[0]

    return [web3, walletAddress, provider]
}

export default connectWallet;