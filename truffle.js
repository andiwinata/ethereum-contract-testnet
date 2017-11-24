// Allows us to use ES6 in our migrations and tests.
require('babel-register');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 470000,
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `https://ropsten.infura.io/${process.env.INFURA_TOKEN}`);
      },
      network_id: 3,
      gas: 470000,
    },
  },
};
