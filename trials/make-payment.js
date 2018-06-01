//A Payment transaction represents a transfer of value from one account to another.
//Payments are also the only way to create accounts.

'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
    server: 'wss://s.altnet.rippletest.net:51233'
});
//Generated {"secret":"shCQDv4WUc9HBUE5Xs7raP3q3xMxh","address":"rhcsV3VrnUr3JhGQUGkrBEbqcZbAuV4fhh"}
//Generated rhcsV3VrnUr3JhGQUGkrBEbqcZbAuV4fhh
//Generated shCQDv4WUc9HBUE5Xs7raP3q3xMxh

function preparePaymentTransactionAndSign() {
    const txJSON = `{
        "TransactionType": "Payment",
        "Account": "rhtpEeHvGqSyuuw2Y3sVSF2cTUWeeDXAjg",
        "Destination": "rUjfP2H4AyuhhZAnf5f7qu17jM5h9gL1F2",
        "Amount": "100000000",
        "Flags": 2147483648,
        "LastLedgerSequence": 9057514,
        "Fee": "12",
        "Sequence": 3
    }`;

    const secret = 'shTStDniwLoMf3MCRruh46qVYhGFG';
    
    return new Promise((resolve, reject) => {
        var signedTransaction = api.sign(txJSON, secret);
        return resolve(signedTransaction);
    });
}

// Prepare payment, sign and submit
api.connect().then(() => {
    preparePaymentTransactionAndSign().then(signResult => {
        console.log("Signed! %j", signResult);

        return api.submit(signResult.signedTransaction).then(submitResult => {
            console.log("Submitted! %j", submitResult);    
        });
    });
}).then(() => {
    return api.disconnect();
}).then(() => {
    console.log('done and disconnected.');
}).catch(console.error);