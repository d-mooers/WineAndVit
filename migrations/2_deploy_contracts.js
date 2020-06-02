var SupplyChain = artifacts.require("SupplyChain");
var Arg = "Wine";
module.exports = deployer => {
    deployer.deploy(SupplyChain, Arg);
};