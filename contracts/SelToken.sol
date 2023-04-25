// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './Token.sol';

contract SelToken {

    Token token;

    address admin;

    uint price;

    uint amountEtherGenerated;

    mapping (address => uint) balanceEtherPay;

    constructor (address _token, uint _price) {

        token = Token(_token);

        admin = msg.sender;

        price = _price;
    }


    // function for buy token ::::::::::::::::::::::::::

    function buyToken ()  external payable{
        require(msg.value > 0);

        require(token.balanceOf(address(this)) >= msg.value * price);

        uint amount = msg.value;

        balanceEtherPay[msg.sender] += amount;

        //token.transferFrom(admin, msg.sender, amount * price);

        amountEtherGenerated += amount;

        token.transfer(msg.sender, amount * price);

        //token.transfer(_acc, amount * price);
    }

    

    // function for balance of ether of the smart contract::::::::::::::::::

    function balanceOfEther () public view returns(uint){
        require(msg.sender == admin);
        return address(this).balance;

    }


    // function for amount of  ether generated::::::::::::

    function amountEtherGenerat() public view returns(uint){
        require(msg.sender == admin);
        return amountEtherGenerated;
    }



    // function for token balance of any address:::::::::::

    function tokenBalance(address _accc) public view returns(uint){
        return token.balanceOf(_accc);
    }


    // function for token balance of the smart contract ::::::::::::::::::

    function tokenBalanceOFSmartContract() public view returns(uint){
        return token.balanceOf(address(this));
    }


    // fonction for sending ether generated from smart contract to admin addresss

    function tranferEther (uint _amount, address payable _acc) public {

        require(msg.sender == admin);

        _acc.transfer(_amount);
    }



    // function to kwon amount ether pay by any address to smart contract


    function amountetherPay () public view returns(uint){
        return balanceEtherPay[msg.sender];
    }



}