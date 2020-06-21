// Utilizar funcionalidades del Ecmascript 6
'use strict'
const Web3 = require('web3');
const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
const jsonPost = require('./blockchainPosts/build/contracts/Posts.json')
const jsonUser = require('./blockchainPosts/build/contracts/Users.json')
let PostABI= jsonPost["abi"]
let networksPost = jsonPost["networks"]
let PostAddress = networksPost['5777']['address'];

let UserABI= jsonUser["abi"]
let networksUser = jsonUser["networks"]
let UserAddress=networksUser['5777']['address'];
const PostContract=web3.eth.contract(PostABI).at(PostAddress);
const UserContract=web3.eth.contract(UserABI).at(UserAddress);
web3.eth.defaultAccount = web3.eth.accounts[1]
export {
	UserContract, PostContract, web3
}
