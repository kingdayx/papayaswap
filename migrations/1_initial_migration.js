const PapayaToken = artifacts.require('PapayaToken')
const PapayaBar = artifacts.require('PapayaBar')
const MasterChef = artifacts.require('MasterChef')
const BnbStaking = artifacts.require('BnbStaking')
const LotteryRewardPool = artifacts.require('LotteryRewardPool')
const SousChef = artifacts.require('SousChef')
const Timelock = artifacts.require('Timelock')

module.exports = function (deployer) {
  deployer.deploy(PapayaToken)
  deployer.deploy(PapayaBar)
  deployer.deploy(MasterChef)
  deployer.deploy(BnbStaking)
  deployer.deploy(LotteryRewardPool)
  deployer.deploy(SousChef)
  deployer.deploy(Timelock)
}
