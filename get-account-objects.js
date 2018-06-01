'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
    server: 'wss://s.altnet.rippletest.net:51233'
});

//Returns objects owned by an account. 
//For an account's trust lines and balances, see getTrustlines and getBalances.
api.connect().then(() => {
    const address = 'rhtpEeHvGqSyuuw2Y3sVSF2cTUWeeDXAjg';
    console.log('Getting account info for ', address);

    api.getAccountObjects(address).then(objects => {
      console.log(objects);
      console.log('getAccountInfo done');
    });
}).then(() => {
    return api.disconnect();
}).then(() => {
    console.log('done and disconnected.');
}).catch(console.error);