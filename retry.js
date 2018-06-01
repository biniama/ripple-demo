const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
  server: 'wss://s.altnet.rippletest.net:51233'
});

api.connect().then(() => {

  var myMaxLedgerVersion = 4000;
  var mySeqNr = 0;
  var address = "rh3YMnG2kuFCHde3RZiHwNa4U1q4a6skFz";

  api.getLedger().then(ledger => {  
    if (ledger.ledgerVersion > myMaxLedgerVersion) {
      myMaxLedgerVersion = ledger.ledgerVersion;
    }
    console.log("ledger.ledgerVersion ", ledger.ledgerVersion);
  });

  api.getAccountInfo(address).then(info =>  {
    if (info.sequence > mySeqNr) {
      mySeqNr = info.sequence;
    }
    console.log("info.sequence ", info.sequence);
  });

}).then(() => {
  return api.disconnect();
}).catch(console.error);