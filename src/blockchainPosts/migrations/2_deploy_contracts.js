var Posts = artifacts.require("./Posts.sol");
var Users = artifacts.require("./Users.sol");
module.exports = function(deployer) {
  deployer.deploy(Posts, {gas: 1000000});
  deployer.deploy(Users, {gas: 1000000});
};

