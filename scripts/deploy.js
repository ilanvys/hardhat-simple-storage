const { ethers, run, network } = require('hardhat')
require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

const main = async () => {
    const SimpleStorageFactory =
        await ethers.getContractFactory('SimpleStorage')
    console.log('Deploying contract...')
    const simpleStorage = await SimpleStorageFactory.deploy()

    const addr = await simpleStorage.getAddress()
    console.log(`Deployed contract to: ${addr}`)

    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log('Waiting for block confirmations...')
        await simpleStorage.deploymentTransaction().wait(3)
        await verify(addr, [])
    }

    let currentFavoriteNumber = await simpleStorage.retrieve()
    console.log(`Current Favorite Number: ${currentFavoriteNumber}`)
    console.log('Updating favorite number...')

    let transactionResponse = await simpleStorage.store('7')
    await transactionResponse.wait(1)
    const updatedFavoriteNumber = await simpleStorage.retrieve()
    console.log(`New Favorite Number: ${updatedFavoriteNumber}`)
}

const verify = async (contractAddress, args) => {
    console.log('Verifying contract...')
    try {
        await run('verify:verify', {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes('already verified')) {
            console.log('Already Verified!')
        } else {
            console.log(e)
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
