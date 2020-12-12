const IntooTVWhitelist = artifacts.require('IntooTVWhitelist');

module.exports = function (deployer) {
  deployer.deploy(IntooTVWhitelist);
};
