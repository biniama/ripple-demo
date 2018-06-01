const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
  server: 'wss://s.altnet.rippletest.net:51233'
});

var maxLedgerVersion;
var sequenceNumber;
const address = "rh3YMnG2kuFCHde3RZiHwNa4U1q4a6skFz";
const secret = 'shNJ3oMV16FapRB373Qq7Ztjaog2q';

api.connect().then(() => { 
  api.getLedger().then(ledger => {  
    maxLedgerVersion = ledger.ledgerVersion;
    console.log("ledger.ledgerVersion ", ledger.ledgerVersion);

    api.getAccountInfo(address).then(info =>  {
      sequenceNumber = info.sequence;
      console.log("info.sequence ", info.sequence);
    }).catch(console.error);

    const txJSON = `{
      "TransactionType": "Payment",
      "Account": "rh3YMnG2kuFCHde3RZiHwNa4U1q4a6skFz",
      "Destination": "rKtPQgCQRyd7dxm1kJ1rA7CnsGADm3yfCt",
      "Amount": "100000000",
      "LastLedgerSequence": ` + maxLedgerVersion + `,
      "Fee": "12",
      "Sequence": ` + sequenceNumber + `
    }`;
  
    console.log(txJSON);
  }).catch(console.error);
}).then(() => {
  return api.disconnect();
}).catch(console.error);

//Like api.generateAddress() shown earlier, api.sign() can be called without api.connect().
//TODO - not tested
console.log(api.sign(txJSON, secret));