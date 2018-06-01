'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
    server: 'wss://s.altnet.rippletest.net:51233'
});

api.connect().then(() => {
    // Request account_info, log response...
    const myAddress = 'rh3YMnG2kuFCHde3RZiHwNa4U1q4a6skFz';   //source
    //const myAddress = 'rKtPQgCQRyd7dxm1kJ1rA7CnsGADm3yfCt';     //destination
    console.log('Getting account info for ', myAddress);

    api.getAccountInfo(myAddress).then(info => {
      console.log(info);
      console.log('getAccountInfo done');
    });
}).then(() => {
    return api.disconnect();
}).then(() => {
    console.log('done and disconnected.');
}).catch(console.error);