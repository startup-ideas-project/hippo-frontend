#!/bin/bash

# navigate to app folder
cd /home/ec2-user/server

# install node and npm
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt -y install nodejs npm

