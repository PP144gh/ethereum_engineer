import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json"; //compiled contract, ABI and bytecode

const ADDRESS = '0x0A532623FCc6B831ec3BceD75592d903d9289941';


const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    ADDRESS
);

export default instance;