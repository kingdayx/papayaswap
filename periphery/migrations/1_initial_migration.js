const Router = artifacts.require('PapayaRouter01')
const WETH = artifacts.require('WETH')

module.exports = async function(deployer, network) {
  let weth
  const FACTORY_ADDRESS = '0xBCdF5fC4e7E46Ec0ff8C667d35608942527FF84d'

  if (network === 'mainnet') {
    weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
  } else {
    await deployer.deploy(WETH)
    weth = await WETH.deployed()
  }
  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address)
}
