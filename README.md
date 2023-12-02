# Simple Storage Smart Contract

## Overview

This repository contains a simple Ethereum smart contract written in Solidity using Hardhat. The contract allows for storing and retrieving a favorite number, as well as adding people with associated favorite numbers and names.

## Smart Contract Details

### SimpleStorage.sol

The main smart contract file (`SimpleStorage.sol`) defines the `SimpleStorage` contract with the following functionalities:

- **store(uint256 _favoriteNumber):** Stores a new favorite number.
- **retrieve():** Retrieves the stored favorite number.
- **addPerson(string memory _name, uint256 _favoriteNumber):** Adds a person with a favorite number and a name to the list.

### Testing

The `test` directory contains unit tests for the smart contract. The tests cover basic functionality such as initializing with a favorite number of 0, updating the favorite number, and adding a person to the list.

## Getting Started

Follow these steps to get started with the project:

1. **Clone the repository:**
  ```bash
  git clone https://github.com/ilanvys/hardhat-simple-storage.git
  ```
   
2. **Install dependencies:**
  ```bash
  cd hardhat-simple-storage
  npm install
  ```
3. **Run tests:**
  ```bash
  npx hardhat test
  ```
4. **Deploy the smart contract:**
  ```bash
  npx hardhat run scripts/deploy.js
  ```

## Acknowledgments
This project was created as part of the FreeCodeCamp tutorial.
