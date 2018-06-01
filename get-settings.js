'use strict';

const {RippleAPI} = require('ripple-lib');

const api = new RippleAPI({
  server: 'wss://s.altnet.rippletest.net:51233'
});

// Request transaction information
api.connect().then(() => {
    const address = 'r9cZA1mLK5R5Am25ArfXFmqgNwjZgnfk59';

    api.getSettings(address).then(settings => {
        console.log("Settings %j ", settings);
    });
    
}).then(() => {
    return api.disconnect();
}).catch(console.error);