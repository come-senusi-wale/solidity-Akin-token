var Token = artifacts.require("Token");
var SelToken = artifacts.require("SelToken");

let name = 'Akin';
let symbol = 'AKIN';
let totalSupply = '100000000000000000000000';

let price = 3;

module.exports = function (deployer) {
  deployer.deploy(Token, name, symbol, totalSupply).then(function(){

    return deployer.deploy(SelToken, Token.address, price);
  });
};
