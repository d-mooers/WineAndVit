const ContractInst = require('./Contract');
const prompt = require('prompt');

function getMode() {
    let mode;
    console.log("Options: ")
    console.log("1 - Add a new item \n2 - Update an item location\n3 - Get an item's location\n4 - Exit")
    prompt.start();
    prompt.get('Mode', function(err, result) {
        if (err || Number(result) > 4 || Number(result) < 1) {
            console.log("INCORRECT INPUT!!!");
            return getMode();
        }
        mode = Number(result);
    });
    return mode;
}

function addItem(contract) {
    let item = {
        id: 0,
        location: "",
        extraInfo: {}
    }

    console.log("Attempting to add new item...\nEnter the following")
    prompt.start();
    prompt.get(['ID Number', 'Location'], function(err, result) {
        if (err) {
            console.log("Promp failure.");
            return null;
        }
        item.id = Number(result['ID Number']);
        item.location = result['Location'];
    })
    contract.addItem(item.id, item.location);
}

function updateLocation(contract) {
    let item = {
        id: 0,
        location: "",
        extraInfo: {}
    }

    console.log("Attempting to update item location...\nEnter the following")
    prompt.start();
    prompt.get(['ID Number', 'Location'], function(err, result) {
        if (err) {
            console.log("Promp failure.");
            return null;
        }
        item.id = Number(result['ID Number']);
        item.location = result['Location'];
    })
    contract.updateLocation(item.id, item.location);
}

function getLocation(contract) {
    let id = 0;
    let location = "";

    console.log("Attempting to retrieve item location")
    prompt.start();
    prompt.get('ID', function(err, result) {
        if (err) {
            console.log("Prompt error");
            return null;
        }
        id = Number(result);
    });
    location = contract.getLocation(id);
    console.log("Location found: " + location);
}

function main() {
    let mode;
    let contract = new ContractInst.Contract();
    contract.getContract();
    while (4 != (mode = getMode())) {
        switch (mode) {
            case 1:
                addItem(contract);
            break;

            case 2:
                updateLocation(contract);
            break;

            case 3:
                getLocation(contract);
            break;
            defualt:
                console.log("Mode errror");
            break;
        }
    }
    console.log("Goodbye!");
}

main();