require('@nomicfoundation/hardhat-toolbox')
require('./tasks/block-number')
require('hardhat-gas-reporter')
require('solidity-coverage')
require('dotenv').config()

module.exports = {
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {},
        sepolia: {
            url: process.env.SEPOLIA_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            chainId: 11155111,
        },
        localhost: {
            url: 'http://127.0.0.1:8545/',
            chainId: 31337,
        },
    },
    solidity: '0.8.19',
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: false,
        outputFile: 'gas-report.txt',
        noColors: true,
        currency: 'USD',
        coinmarketcap: process.env.COIN_MARKET_CAP,
    },
}
