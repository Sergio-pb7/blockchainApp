#!/bin/bash
docker build -t ganache .
docker build -f Dockerfile.reactapp -t reactapp .
docker run -d -p 7545:7545 --name ganache --network test ganache
sleep 5
cd src/blockchainPosts
truffle migrate
cd ../..
docker run -d -p 3000:3000 --network=test --name=reactapp --link ganache  reactapp