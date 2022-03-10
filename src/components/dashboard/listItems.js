import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Dashboard from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';


export const mainListItems =  (
        <React.Fragment>

              <ListItemButton component={Link} to='/'>
                <ListItemIcon>
                    <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>

            <ListItemButton component={Link} to='/databoard'>
                <ListItemIcon>
                    <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Data board" />
              </ListItemButton>

            <ListItemButton component={Link} to='/register-data'>
                <ListItemIcon>
                    <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Register data" />
              </ListItemButton>
        </React.Fragment>
    )

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Settings
    </ListSubheader>
    <ListItemButton>
      <ListItemText primary="Keys" />
    </ListItemButton>
  </React.Fragment>
);