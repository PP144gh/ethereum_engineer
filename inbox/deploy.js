const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
//updated web3 and hdwallet-provider imports added for convenience

// deploy code will go here
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'kiss long night throw deposit search denial gate cycle explain embrace weapon',
    'https://sepolia.infura.io/v3/2bb074eb1e4d4e10a366d00085f1943c'
);

const web3 = new Web3(provider);
//var gasEstimate = web3.eth.estimateGas({data: '0x' + bytecode});


//test
//need to define it as function to use the async await syntax
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account: ', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: '0x' + bytecode, arguments: ['Hi there!'] })
        .send({ gas: 6000000,
            gasPrice: web3.utils.toWei('10', 'gwei'), from: accounts[0] });
    console.log('Contract deployed to: ', result.options.address);
    provider.engine.stop(); //prevent hanging deploy
};
deploy();