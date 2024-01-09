// SPDX-License-Identifier: MIT
 
pragma solidity ^0.8.9;
 
contract Inbox {
    string public message;
    
    constructor(string memory initialMessage) {
        message = initialMessage;
    }
    
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}


/*

Update the pragma version at the top of the contract file to ^0.8.9

Refactor the Inbox constructor to use the new constructor keyword - Source.

Specify the data location of the variables to be memory - Source.

Remove the public keyword from the constructor - Source.

Add an SPDX identifier to the top of the contract (will address compilation warnings) - Source.


*/