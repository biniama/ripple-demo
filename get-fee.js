const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
  server: 'wss://s1.ripple.com' // Public rippled server hosted by Ripple, Inc.
});

api.connect().then(() => {
    api.getFee().then(fee => {
        console.log("Fee " + fee);   // sample output = 0.000012
    });
}).then(() => {
  return api.disconnect();
}).catch(console.error);