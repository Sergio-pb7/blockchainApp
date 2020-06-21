pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;

contract Posts{
	struct Post{
		address account;
		uint16 idPost;
		string content;
		uint8 numLikes;
	}
	uint8 numberOfPosts;
	mapping (uint8 => Post) posts;
	function getPost(uint8 idPost) public view returns (address, uint16, string memory, uint8) {
		Post memory post = posts[idPost];
		return (post.account, post.idPost, post.content, post.numLikes);
	}

	function addLike(uint8 idPost) public {
		posts[idPost].numLikes++;
	}

	function addPost(string memory content) public {
		Post memory post = Post(msg.sender, numberOfPosts, content, 0);
		posts[numberOfPosts] = post;
		numberOfPosts++;
	}

	function getNumberOfPosts() public view returns (uint8) {
		return numberOfPosts;
	}
}

