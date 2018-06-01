const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
  server: 'wss://s.altnet.rippletest.net:51233'
});

// Request transactions for an address
api.connect().then(() => {
    const address = 'rh3YMnG2kuFCHde3RZiHwNa4U1q4a6skFz';

    api.getTransactions(address).then(transactions => {
        console.log("Transactions %j ", transactions);
    }).catch(console.error);
    
}).then(() => {
    return api.disconnect();
}).catch(console.error);