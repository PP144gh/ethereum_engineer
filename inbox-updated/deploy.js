const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
 
const { abi, evm } = require('./compile');
 
const provider = new HDWalletProvider(
    'kiss long night throw deposit search denial gate cycle explain embrace weapon',
    'https://sepolia.infura.io/v3/2bb074eb1e4d4e10a366d00085f1943c'
);
 
const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
 
  console.log('Attempting to deploy from account', accounts[0]);
 
  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });
 
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
 
deploy();


/* 
Update the import to use the newer @truffle/hdwallet-provider module.

Update the import to destructure the abi (formerly the interface) and the evm (bytecode)
const { abi, evm } = require('./compile');

Pass the abi to the contract object:
const result = await new web3.eth.Contract(abi)

Assign the bytecode to the data property of the deploy method:

    .deploy({
      data: evm.bytecode.object, 
Call provider.engine.stop() to prevent deployment from hanging in the terminal - Source
*/