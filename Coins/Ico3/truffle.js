module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0x1805d581593B31138BE3bF780A17497229a2774d", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 6150346 // Gas limit used for deploys
    }
  }
  /*,
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }*/
};