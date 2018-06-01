'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
    //server: 'wss://s1.ripple.com'   //Public rippled server
    server: 'https://s.altnet.rippletest.net:51234'
})

api.connect().then(() => {
    /* begin custom code ------------------------------------ */
    const myAddress = 'r3WdRJrGYySRnv8WgNi4T5rA42zySfPtBd';
    
    console.log('getting account info for', myAddress);
    return api.getAccountInfo(myAddress);
}).then(info => {
    console.log(info);
    console.log('getAccountInfo done');
  
    /* end custom code -------------------------------------- */
}).then(() => {
    return api.disconnect();
}).then(() => {
    console.log('done and disconnected.');
}).catch(console.error);