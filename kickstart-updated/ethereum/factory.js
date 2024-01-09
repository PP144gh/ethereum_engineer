import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
  

const address1 = process.env.NEXT_PUBLIC_ADDRESS;

//const address1= '0x41f38e37f8334953077BD18A422Dd38C7ce91877';

//console.log(`Environment variables in use: \n ${address1}`);

 
const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  address1
);
 
export default instance;