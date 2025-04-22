import Web3 from 'web3';
import Onboard from 'bnc-onboard'

const connectWallet = window.connectWallet = async () => {
	let web3;
	let provider;

	const onboard = Onboard({
	  networkId: 1,
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
      	return 'User didnt select a wallet address.'
      }
    } else {
    	return 'User did not approve wallet connection.'
    }

    let wallets = await web3.eth.getAccounts();
    let walletAddress = wallets[0];

    return [web3, walletAddress, provider]
}

export default connectWallet;