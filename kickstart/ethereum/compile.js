const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath); //removes directory build ie removes old compiled contracts

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");
const output = solc.compile(source, 1).contracts; //compiles contracts, 
//.contracts is a property of the compiled contracts that contains the bytecode and the abi

fs.ensureDirSync(buildPath); //creates directory build if it doesn't exist
console.log(output);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract] // creates file in path buildPath, with name next argument, with content next argument
  ); //creates file Campaign.json and CampaignFactory.json in directory build
  //creates a file for each contract in the .sol file, the .replace(":", "") after contract is to remove the: from the name
}
