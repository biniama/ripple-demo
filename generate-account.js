'use strict';

const {RippleAPI} = require('ripple-lib');

const api = new RippleAPI({
  server: 'wss://s.altnet.rippletest.net:51233'
});

// Generate address, log address (not secret)
var account = api.generateAddress();
console.log("Generated Address " + account.address);
console.log("Generated Address " + account.secret);
//console.log("Generated %j", account);


//Generated {"secret":"shCQDv4WUc9HBUE5Xs7raP3q3xMxh","address":"rhcsV3VrnUr3JhGQUGkrBEbqcZbAuV4fhh"}
//Generated rhcsV3VrnUr3JhGQUGkrBEbqcZbAuV4fhh
//Generated shCQDv4WUc9HBUE5Xs7raP3q3xMxh

//NEW
//Generated Address r4fnMFFyXEUUJ9xqg1UtB9ZnbFEPJcF97c
//Generated Address ssoVKsmh5THBtTAw7x1VMvmCGq87T