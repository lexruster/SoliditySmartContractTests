var AlexCrowdsale = artifacts.require("./AlexCrowdsale.sol");

module.exports = function(deployer, network, accounts) {

  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 60 // one second in the future
  const endTime = startTime + (86400 * 40) // 40 days
  const rate = new web3.BigNumber(1000)
  const cap = new web3.BigNumber(15000)
  const wallet = accounts[0]

  console.log(startTime, endTime, rate, cap, wallet);

  deployer.deploy(AlexCrowdsale, startTime, endTime, rate, cap, wallet, 
  {      
    //gas:6759824
    //gas:6059824
    gas:6657458 
  })
};
