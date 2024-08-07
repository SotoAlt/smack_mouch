async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      // Request account access if needed
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      // Accounts now exposed
      console.log('Connected account:', accounts[0]);
      alert('Connected to MetaMask');
    } catch (error) {
      console.error('User denied account access', error);
      alert('Failed to connect to MetaMask');
    }
  } else {
    alert('MetaMask is not installed. Please install it to use this feature.');
  }
}

// Call this function when you want to connect MetaMask
connectWallet();



const scriptsInEvents = {

	async Game_lvl_01_Event10_Act1(runtime, localVars)
	{
		connectWallet();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

