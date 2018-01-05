pragma solidity ^0.4.13;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract AlexCoin is MintableToken {
  string public name = "ALEX COIN";
  string public symbol = "ACO";
  uint256 public decimals = 18;
}