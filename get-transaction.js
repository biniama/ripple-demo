'use strict';

const {RippleAPI} = require('ripple-lib');

const api = new RippleAPI({
  server: 'wss://s.altnet.rippletest.net:51233'
});

// Request transaction information
api.connect().then(() => {
    const id = '7F297DA2B50A495FAEB15BC636D0E00A7842FD51B2B917D7B924CBA5E8C815C0';

    api.getTransaction(id).then(transaction => {
        console.log("Transaction %j ", transaction);
    }).catch(console.error);
    
}).then(() => {
    return api.disconnect();
}).catch(console.error);