
window.addEventListener('DOMContentLoaded',  (event) => {

    let contract;
    let web3;

    let selTokenAddress = '0xd8883A9322862E7FcD0f820Fde2A1c5Af00F313A';

    

    let selTokenAbi = [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_price",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "buyToken",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function",
          "payable": true
        },
        {
          "inputs": [],
          "name": "balanceOfEther",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "amountEtherGenerat",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_accc",
              "type": "address"
            }
          ],
          "name": "tokenBalance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [],
          "name": "tokenBalanceOFSmartContract",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            },
            {
              "internalType": "address payable",
              "name": "_acc",
              "type": "address"
            }
          ],
          "name": "tranferEther",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "amountetherPay",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        }
      ];

    
    let ether = document.getElementById('ether');
    let buy = document.getElementById('buy');
    let tokenHave = document.getElementById('token_have');
    let tokenPrice = document.getElementById('token_price');
    let avilableToken = document.getElementById('avialable_token');
    let ethPaid = document.getElementById('eth_paid');

    //web3 = new Web3(web3.currentProvider);
    //web3 = new Web3(window.web3.currentProvider);

    

    

    

    /*if (window.ethereum) {

        web3 = new Web3(window.ethereum);
        await ethereum.enable();

    }else if(window.web3){

        web3 = new Web3(window.web3.currentProvider);

    }else{

        alert('install matamask');
    }*/



    /*let accounts = await web3.eth.getAccounts();

    let account = accounts[0];*/

    /*contract = new web3.eth.Contract(selTokenAbi, selTokenAddress);

    let accounte = async () => {

      let accounts = await web3.eth.getAccounts();

      let account = accounts[0];
      //return account;
      console.log(account);
  }*/

  console.log(me);
  

    
    

      
})