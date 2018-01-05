var AlexCrowdsale = artifacts.require("./AlexCrowdsale.sol");

module.exports = function(deployer, network, accounts) {

  const startTime = web3.eth.getBlock('latest').timestamp + 60;// one second in the future
  const endTime = startTime + (86400 * 40); // 40 days
  const rate = new web3.BigNumber(1000);
  const cap = web3.toWei(15000, "ether");
  const wallet = accounts[0]

  console.log("StartTime: ", new Date(startTime*1000),
   "End Date:", new Date(endTime*1000),
   "Rate: ", rate.toString(10), 
   "Cap: ",   web3.fromWei(cap, "ether"), 
   "Wallet:", wallet);

  deployer.deploy(AlexCrowdsale, startTime, endTime, rate, cap, wallet)
};
