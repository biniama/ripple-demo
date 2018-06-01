const RippleAPI = require('ripple-lib').RippleAPI;
//import {RippleAPI as RippleAPI} from 'ripple-lib';

const api = new RippleAPI({
  server: 'wss://s.altnet.rippletest.net:51233'
});

const address = "rh3YMnG2kuFCHde3RZiHwNa4U1q4a6skFz";
const secret = 'shNJ3oMV16FapRB373Qq7Ztjaog2q';

function getMaxLedgerVersion() {
  return api.getLedger().then(ledger => {  
    console.log("ledger.ledgerVersion ", ledger.ledgerVersion);
    return ledger.ledgerVersion + 5;
  }).catch(err => console.error(err));
}

function getSequenceNumber() {
  return api.getAccountInfo(address).then(info =>  {
    console.log("info.sequence ", info.sequence);
    return info.sequence;
  }).catch(err => console.error(err));
}

function prepareTransaction(maxLedgerVersion, sequenceNumber) {

  var txJSON = `{
    "TransactionType": "Payment",
    "Account": "rh3YMnG2kuFCHde3RZiHwNa4U1q4a6skFz",
    "Destination": "rKtPQgCQRyd7dxm1kJ1rA7CnsGADm3yfCt",
    "Amount": "100000000",
    "LastLedgerSequence": ` + maxLedgerVersion + `,
    "Fee": "12",
    "Sequence": ` + sequenceNumber + `
  }`;

  console.log(txJSON);

  return txJSON;
}

function sign(txJSON, secret) {
  return api.sign(txJSON, secret).then(result => {
    console.log("signedTransaction %j", result.signedTransaction);
    return result.signedTransaction;
  });
}

function submit(signedTransaction) {
  return api.submit(signedTransaction).then(result => {
    console.log(result);
    return result;
  }).catch(err => console.error(err));
}

api.connect().then(() => {
  console.log('Connected');
  return getMaxLedgerVersion().then(maxLedgerVersion => {
    return getSequenceNumber().then(sequenceNumber => {
      let txJSON = prepareTransaction(maxLedgerVersion, sequenceNumber);
      
      var result = api.sign(txJSON, secret);
      return result.signedTransaction;
    }).then((signedTransaction) => {
        console.log("signedTransaction %j", signedTransaction);
        return api.submit(signedTransaction).then(result => {
          console.log(result);
          return result;
        }).catch(err => console.error(err));
      });
    });
}).then(() => {
  api.disconnect().then(() => {
    console.log('api disconnected');
    process.exit();
  });
}).catch(console.error);