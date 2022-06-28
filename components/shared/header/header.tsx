import React, { useState } from 'react'
import { Avatar, Badge, Box, Button, Menu, MenuItem, Toolbar } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import { deepPurple } from '@mui/material/colors';

const Header: React.FC = () => {

  const toolbarStyle = {
    maxHeight: '60px',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }

  const buttonStyle = {
    padding: '0',
    minWidth: 'auto',
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className='header'>
      <Box>
        <Toolbar sx={toolbarStyle}>
          <Badge badgeContent={4} color="primary" sx={{mr: 2, cursor: 'pointer'}}>
            <NotificationsIcon fontSize='small' color='secondary' />
          </Badge>
          <Badge badgeContent={4} color="primary" sx={{mr: 4, cursor: 'pointer'}}>
            <LocalPostOfficeIcon fontSize='small' color='secondary' />
          </Badge>
          <Button 
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={buttonStyle}
          >
            <Avatar 
              src="/broken-image.jpg"
              alt="Tareq" 
              sizes='small'
              sx={{
                bgcolor: deepPurple[900],
                width: '30px',
                height: '30px',
                cursor: 'pointer',
              }} 
              
            />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem sx={{fontSize: '13px'}} onClick={handleClose}>Profile</MenuItem>
            <MenuItem sx={{fontSize: '13px'}} onClick={handleClose}>My account</MenuItem>
            <MenuItem sx={{fontSize: '13px'}} onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </Box>
    </header>
  )
}

export default Header