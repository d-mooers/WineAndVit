const SupplyChain = artifacts.require("SupplyChain");

class Contract {
    constructor() {
        this.instance = null;
    }

    async getContract() {
        this.instance = await SupplyChain.deployed();
    }

    async addItem(id, location, extra={}) {
        let extraInfo = JSON.stringify(extra);
        let retVal = await this.instance.addItem(id, location, extraInfo).call();
        if (retVal = 0)
            console.log("Item number", id, " already exists");
        else
            console.log("Item added successfully: ", id);
        return retVal;
    }

    async updateLocation(id, newLocation) {
        let retVal = await this.instance.updateLocation(id, newLocation).call();
        if (retVal == 0)
            console.log("Item does not exist under given ID: ", id);
        else
            console.log("Item number: ", id, " successfully updated location to: ", newLocation);
        return retVal;
    }

    async getLocation(id) {
        let location = await this.instance.getLastLocation(id).call();
        return location;
    }
}