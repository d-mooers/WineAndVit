const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require("fs");
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    abs_calpolybchain_research_research: {
      network_id: "*",
      gas: 0,
      gasPrice: 0,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\dylma\\Documents\\BlockchainLab\\AzureTestCode\\supplychainv1.env', 'utf-8'), "https://research.blockchain.azure.com:3200/lpNNK8l1jlOkHCYbpookp9Th")
    }
  }
};
