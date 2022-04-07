#!/bin/bash

# navigate to app folder
cd /home/ec2-user/server

# install node and npm
sudo apt install curl
sudo apt install aptitude
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo aptitude install npm
sudo yarn -y install nodejs 

