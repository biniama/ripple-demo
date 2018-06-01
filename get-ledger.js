const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
  //server: 'wss://s1.ripple.com' // Public rippled server hosted by Ripple, Inc.
  server: 'wss://s.altnet.rippletest.net:51233'
});

api.connect().then(() => {
  api.getLedger().then(ledger => {
    console.log("Ledger %j ", ledger);
  });
}).then(() => {
  return api.disconnect();
}).catch(console.error);