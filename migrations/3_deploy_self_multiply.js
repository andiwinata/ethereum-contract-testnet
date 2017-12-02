var SelfMultiply = artifacts.require('./SelfMultiply.sol');

module.exports = function(deployer) {
  deployer.deploy(SelfMultiply);
};
