var Voting = artifacts.require('./Voting.sol');
module.exports = function(deployer) {
  deployer.deploy(Voting, ['Jack', 'John', 'Jose'], { gas: 470000 });
};
