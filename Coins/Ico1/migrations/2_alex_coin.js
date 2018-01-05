var AlexCoinCrowdsale = artifacts.require("./AlexCoinCrowdsale.sol");

module.exports = function(deployer, network, accounts) {

  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1 // one second in the future
  const endTime = startTime + (86400 * 20) // 20 days
  const rate = new web3.BigNumber(1000)
  const wallet = accounts[0]

  console.log(startTime, endTime, rate, wallet);

  deployer.deploy(AlexCoinCrowdsale, startTime, endTime, rate, wallet, 
  {      
    //gas:6759824
    //gas:6059824
    gas:6657458 
  })
};
