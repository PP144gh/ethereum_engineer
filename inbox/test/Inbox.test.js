const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');
const web3 = new Web3(ganache.provider()); //creates a new instance of web3 and tells it to connect to the ganache provider
const { interface, bytecode } = require('../compile'); //import the interface and bytecode from the compile.js file



/*
// with promises

beforeEach(() => {
    // Get a list of all accounts
    web3.eth.getAccounts().then((fetchedAccounts) => {
      console.log(fetchedAccounts);
    });
  });
  
  describe("Inbox", () => {
    it("deploys a contract", () => {});
  });

*/

// with async await
//interactions with the blockchain are asynchronou because it takes time to process

let accounts;
let inbox;
const INITIAL_STRING = "Hi there!";

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(JSON.parse(interface)).deploy({ data: bytecode, arguments: [INITIAL_STRING] }).send({ from: accounts[0], gas: "1000000" });
    // use one of those accounts to deploy the contract

});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(inbox.options.address); // test fails if address inside options inside inbox is null or undefined
  });
  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_STRING);
  });
  it('can change the message', async () => {
    await inbox.methods.setMessage('bye').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye');
  });
});





/*
class Car {
    park() {
      return 'stopped';
    }
    drive() {
      return 'vroom';
    }
  }
  
  let car;
  
  beforeEach(() => {
    car = new Car();
  });
  
  describe('Car', () => {
    it('can park', () => {
      assert.equal(car.park(), 'stopped');
    });
    it('can drive', () => {
      assert.equal(car.drive(), 'vroom');
    });
  });
  */