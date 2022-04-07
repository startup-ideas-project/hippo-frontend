#!/bin/bash

# navigate to app folder
cd /home/ec2-user/server/src

# initial startup by running react-script "start", name process "marketing"
# --watch watches and restarts if files change
pm2 start yarn --name "hippo-frontend" -- start

# auto restart server if shut down
pm2 startup

# freeze process list for automatic respawn
pm2 save

# restart all processes - necessary to do this again?
pm2 restart all
