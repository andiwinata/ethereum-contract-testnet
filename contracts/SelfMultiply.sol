pragma solidity ^0.4.18; //We have to specify what version of the compiler this code will use

contract SelfMultiply {
  address public owner = msg.sender;
  uint public balance;

  // Modifiers can be used to change
  // the body of a function.
  // If this modifier is used, it will
  // prepend a check that only passes
  // if the function is called from
  // a certain address.
  modifier onlyBy(address _account)
  {
      require(msg.sender == _account);
      // Do not forget the "_;"! It will
      // be replaced by the actual function
      // body when the modifier is used.
      _;
  }

  function SelfMultiply() public {

  }

  function deposit() external payable returns (uint) {
    balance += msg.value * 100;
    return balance;
  }

  function withdraw() external payable onlyBy(owner) returns (uint) {
    msg.sender.transfer(balance);
    return balance;
  }
}