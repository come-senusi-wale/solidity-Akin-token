// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol';

//import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol';

contract Token is ERC20 {
    constructor(string memory _name, string memory _symbol, uint _totalSupply ) ERC20(_name, _symbol) {

        _mint(msg.sender, _totalSupply);        
    }
}