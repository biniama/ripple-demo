'use strict';

const {RippleAPI} = require('ripple-lib');

const api = new RippleAPI({
  server: 'wss://s.altnet.rippletest.net:51233'
});

api.connect().then(() => {
  // Request server_info, log response...
  api.getServerInfo().then(info => {
    console.log(info);
  });
}).then(() => {
  return api.disconnect();
}).catch(console.error);