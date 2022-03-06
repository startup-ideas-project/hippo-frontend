import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Dashboard from '@material-ui/icons/Dashboard';


export const mainListItems = (
        <React.Fragment>
            <ListItemButton>
              <ListItemIcon>
                  <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                  <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Data board" />
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