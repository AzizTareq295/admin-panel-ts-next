import React, { useState } from 'react'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';

const Sidebar: React.FC = () => {

  const [open, setOpen] = React.useState<React.SetStateAction<boolean>>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const sidebarLogoStyle = {
    minHeight: '64px',
    maxHeight: '64px',
    alignItems: 'center',
    display: 'flex',
    fontWeight: 900,
    fontSize: '2rem',
    paddingLeft: '1rem',
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <Typography variant='h4' sx={sidebarLogoStyle}>LOGO</Typography>
      </div>
      <div className='sidebar-menu'>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Nested List Items
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <PeopleAltIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InventoryIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Category" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  )
}

export default Sidebar