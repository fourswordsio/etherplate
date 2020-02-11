// Allows us to use ES6 in our migrations and tests.
require('@babel/register')
require('@babel/polyfill')


const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "unfold extra know hat kiwi child lobster spike draw iron margin scan";
module.exports = {
       networks: {
        ropsten: {
          provider: function() {
            return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/94db3a2237564b499554399023ca9d3e", 0);
          },
          network_id: '3',
        },
        test: {
          provider: function() {
            return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/");
          },
          network_id: '*',
        }},
        compilers: {
          solc: {
            version: "^0.4.23"
      }}
    }