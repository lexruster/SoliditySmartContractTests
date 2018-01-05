pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/crowdsale/CappedCrowdsale.sol';
import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract SampleCrowdsaleToken is MintableToken {

  string public constant name = "Alex Crowdsale Token";
  string public constant symbol = "ACT";
  uint8 public constant decimals = 18;

}

contract AlexCrowdsale is CappedCrowdsale {
   function AlexCrowdsale(uint256 _startTime, uint256 _endTime, uint256 _rate, uint256 _cap, address _wallet) public
    CappedCrowdsale(_cap)
    Crowdsale(_startTime, _endTime, _rate, _wallet) 
    {          
  }

  // creates the token to be sold.
  // override this method to have crowdsale of a specific MintableToken token.
  function createTokenContract() internal returns (MintableToken) {
    return new SampleCrowdsaleToken();
  }
}