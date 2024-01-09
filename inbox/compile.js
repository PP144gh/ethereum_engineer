// compile code will go here
const path = require("path");
const fs = require("fs");
const solc = require("solc");


//this allows to have a correct path to the file using any OS
const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");

//correct path to the contract file
const source = fs.readFileSync(inboxPath, "utf8");

//console.log(solc.compile(source, 1));
// 1 is the number of contracts we are attempting to compile

//make it available to other files in the project
module.exports = solc.compile(source, 1).contracts[":Inbox"];
 // only need the inbox contract, not the errors