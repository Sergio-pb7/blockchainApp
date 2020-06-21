pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;

contract Users{
	struct User{
		string name;
		address account;
		bool used;
	}

	uint8 numberOfUsers;
	mapping (uint8 => User) users;

	function getUsername(address user) public view returns (string memory) {
		for(uint8 i = 0; i < numberOfUsers; i++){
			if (user == users[i].account) {
				return users[i].name;
			}
		}
		return "";
	}

	function isAccountUsed(address user) public view returns (bool) {
		for(uint8 i = 0; i < numberOfUsers; i++){
			if (user == users[i].account) {
				return true;
			}
		}
		return false;
	}


	function addUser(string memory username) public {
		User memory user = User(username, msg.sender, true);
		users[numberOfUsers] = user;
		numberOfUsers++;
	}

	function getUser(uint8 idUser) public view returns (string memory, address) {
		User memory user = users[idUser];
		return (user.name, user.account);
	}

	function getNumberOfUsers() public view returns (uint8) {
		return numberOfUsers;
	}
}

