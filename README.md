# ripple-demo
First application for testing Ripple API

# Guide
https://ripple.com/build/rippleapi-beginners-guide/#rippleapi-beginners-guide

# Setup
`npm install`

# How to run
`./node_modules/.bin/babel-node get-account-info.js`

## Output
```
getting account info for rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn
{ sequence: 375,
  xrpBalance: '135.693826',
  ownerCount: 9,
  previousInitiatedTransactionID: '4F17A26A67D237781C8BD480D23FA0C489B10B89CAE20B3804723852AAA1FDBE',
  previousAffectingTransactionID: '228CB96FF8D9BB714E5C6BF2E1B1AD357FAD380D269FEF8ADF10379D74964BD6',
  previousAffectingTransactionLedgerVersion: 36448391 }
getAccountInfo done
done and disconnected.
```

# Make Payment transaction
```
[terminal]$ node make.js
```
### Output
```
Connected
Current Ledger 9417149
info.sequence  4
Order Prepared {
          "TransactionType": "Payment",
          "Account": "rh3YMnG2kuFCHde3RZiHwNa4U1q4a6skFz",
          "Destination": "rKtPQgCQRyd7dxm1kJ1rA7CnsGADm3yfCt",
          "Amount": "100000000",
          "LastLedgerSequence": 9417154,
          "Fee": "12",
          "Sequence": 4
        }
Current Ledger 9417149
Tentative Result:  tesSUCCESS
Tentative Message:  The transaction was applied. Only final in a validated ledger.
Verifing Transaction
Verifing Transaction
Final Result:  tesSUCCESS
Validated in Ledger:  9417150
Sequence:  4
api disconnected
```
# Make Another Payment transaction
```
[terminal]$ node make.js
```
### Output
```
Connected
Current Ledger 9417168
info.sequence  5
Order Prepared {
          "TransactionType": "Payment",
          "Account": "rh3YMnG2kuFCHde3RZiHwNa4U1q4a6skFz",
          "Destination": "rKtPQgCQRyd7dxm1kJ1rA7CnsGADm3yfCt",
          "Amount": "200000000",
          "LastLedgerSequence": 9417173,
          "Fee": "12",
          "Sequence": 5
        }
Current Ledger 9417168
Tentative Result:  tesSUCCESS
Tentative Message:  The transaction was applied. Only final in a validated ledger.
Verifing Transaction
Verifing Transaction
Verifing Transaction
Final Result:  tesSUCCESS
Validated in Ledger:  9417170
Sequence:  5
api disconnected
```

# Get Account Information of the destination account
change the value of the address variable
```
[terminal]$ node get-account-info.js
```
### Output
```
Getting account info for  rKtPQgCQRyd7dxm1kJ1rA7CnsGADm3yfCt
done and disconnected.
{ sequence: 1,
  xrpBalance: '10500',
  ownerCount: 0,
  previousAffectingTransactionID: 'C755BDC47B76530900BA8539E8BC2439DC1D6C5E240F0B6892FBDB1A87B7093A',
  previousAffectingTransactionLedgerVersion: 9417170 }
getAccountInfo done
```

# Get Account Information of the source account
change the value of the address variable

```
[terminal]$ node get-account-info.js
```
### Output
```
Getting account info for  rh3YMnG2kuFCHde3RZiHwNa4U1q4a6skFz
done and disconnected.
{ sequence: 6,
  xrpBalance: '9499.99994',
  ownerCount: 0,
  previousAffectingTransactionID: 'C755BDC47B76530900BA8539E8BC2439DC1D6C5E240F0B6892FBDB1A87B7093A',
  previousAffectingTransactionLedgerVersion: 9417170 }
getAccountInfo done
```