pragma solidity ^0.4.17;

//enables the creation of safe verified campaigns, using the conract below, by other entity: the msg.sender
contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender); 
        // msg.sender is the address of the person who calls the function. 
        //without it, the manager of the campaign would be the factory contract
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}


contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    } // this defines a new type, needs to be instanciated. So we define a dynamic array of Request type below.

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
        //looking an address that is not in the mapping returns false (by definition!!).
        // change approvers.push(msg.sender); in contribute() to approvers[msg.sender] = true;
        //Since one cannot loop through mappings, it is important to create a variable that counts yes votes in each request. change Request struct to
        approversCount++;
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });
        //newRequest should be saved as memory, as it is local and temporary, permanent storage gets done when it is added to requests. if you write storage gives error because creation of new Request instance is always stored in memory.
        // only value types need initialisation. Reference types like mappings don't need (it would be very weird to do, as they already exist with length undefined and false/null/zero in every value).
        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    //storage because I will want to change the request[index] entry of the array initialised at the start. require(approvers[msg.sender]); to check if sender is a contributor.
    //require(!request.approvals[msg.sender]); is true if sender has NOT voted in this request yet.

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }
    //same considerations as before. checks if request is complete and then changes its variable compete to true, hence why the storage in the request definition. sends the money to the address in the request and only does this if more than 50% have agreed (voted yes).


function getSummary() public view returns (
    uint, uint, uint, uint, address
) {
    return (
        minimumContribution,
        this.balance,
        requests.length,
        approversCount,
        manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}

