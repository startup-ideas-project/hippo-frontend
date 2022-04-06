#!/bin/bash

# navigate to app folder
cd /app

# install node and npm
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -
yum -y install nodejs npm

# Change after install permission
chmod 777 scripts/after_install.sh