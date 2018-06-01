const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
  server: 'wss://s1.ripple.com' // Public rippled server hosted by Ripple, Inc.
});

api.connect().then(() => {
  api.getLedgerVersion().then(ledgerVersion => {
    console.log("Ledger Version " + ledgerVersion);   // Sample = Ledger Version 38872088
  });
}).then(() => {
  return api.disconnect();
}).catch(console.error);