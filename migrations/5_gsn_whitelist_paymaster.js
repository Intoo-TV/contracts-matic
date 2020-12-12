const IntooTVWhitelistPaymaster = artifacts.require(
  'IntooTVWhitelistPaymaster'
);
const IntooTVWhitelist = artifacts.require('IntooTVWhitelist');

module.exports = async function (deployer) {
  const { address: whitelistAddr } = await IntooTVWhitelist.deployed();

  await deployer.deploy(IntooTVWhitelistPaymaster, whitelistAddr);
};
