const Factory = artifacts.require('PapayaFactory')
const Token1 = artifacts.require('Token1')
const Token2 = artifacts.require('Token2')

module.exports = async function(deployer, network, addresses) {
  await deployer.deploy(Factory, addresses[0])
  const factory = await Factory.deployed()

  if (network === 'mainnet') {
    token1address = ''
    token2address = ''
  } else {
    await deployer.deploy(Token1)
    await deployer.deploy(Token2)
    const token1 = await Token1.deployed()
    const token2 = await Token2.deployed()
    token1address = token1.address
    token2address = token2.address
  }
  await factory.createPair(token1address, token2address)
}
