// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract IntooTVRoyalty is ERC20 {
<<<<<<< HEAD
  constructor(uint256 initialSupply) public ERC20('a-Royal', 'aRXP') {
=======
  constructor(uint256 initialSupply) public ERC20('IntooTV Royalty', 'RLTY') {
>>>>>>> d9435bb66690c42ff555c02477af3216bd468a6c
    _mint(msg.sender, initialSupply);
  }
}
