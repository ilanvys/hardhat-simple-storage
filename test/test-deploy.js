const { ethers } = require('hardhat')
const { assert } = require('chai')

describe('SimpleStorage', () => {
    let SimpleStorageFactory, simpleStorage

    beforeEach(async () => {
        SimpleStorageFactory = await ethers.getContractFactory('SimpleStorage')
        simpleStorage = await SimpleStorageFactory.deploy()
    })

    it('Should start with a favorite number of 0', async () => {
        const currValue = await simpleStorage.retrieve()
        const expectedValue = '0'

        assert.equal(currValue.toString(), expectedValue)
    })

    it('Should update when we call store', async () => {
        const expectedValue = '7'
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)
        const currValue = await simpleStorage.retrieve()

        assert.equal(currValue.toString(), expectedValue)
    })

    it('Should add person to the list', async () => {
        const expectedFavoriteNumValue = '21'
        const expectedNameValue = 'test'
        const transactionResponse = await simpleStorage.addPerson(
            expectedNameValue,
            expectedFavoriteNumValue,
        )
        await transactionResponse.wait(1)

        const person = await simpleStorage.people(0)
        currFavoriteNum = person[0]
        currName = person[1]

        assert.equal(currFavoriteNum, expectedFavoriteNumValue)
        assert.equal(currName, expectedNameValue)
    })
})
