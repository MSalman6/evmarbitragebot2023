require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
const privateKeys = process.env.PRIVATE_KEYS || ""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    // hardhat: {
    //   forking: {
    //     url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    //   }
    // },
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: ['b3b7c66c48ed4afd626fbfd63b37f24213a772c52c6c914a64870543067e5116']
    }
  }
};