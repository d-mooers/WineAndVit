pragma solidity ^0.5.0;

contract SupplyChain
{
    struct Item {
        string lastLocation;
        uint identifier;
        string extraInfo;
    }
    string public itemType;

    mapping(uint => Item) itemLookUp;

    constructor (string memory _itemType) public {
        itemType = _itemType;
    }

    function addItem(uint id, string memory location, string memory extraInfo) public
        returns (uint) {
        if (itemLookUp[id].identifier != id) {
            return 0;
        }
        Item memory item = Item(location, id, extraInfo);
        itemLookUp[id] = item;
        return 1;
    }

    function updateLocation(uint id, string memory newLocation) public
        returns (uint) {
        if (itemLookUp[id].identifier == 0) {
            return 0;
        }
        itemLookUp[id].lastLocation = newLocation;
        return 1;
    }

    function getLastLocation(uint id) public view returns (string memory) {
        Item memory item = itemLookUp[id];
        return item.lastLocation;
    }
}