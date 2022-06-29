import React from 'react'
import { List, Typography } from '@mui/material'
import MenuLists from './MenuILists';
import NavItem from './NavItem';

const Sidebar: React.FC = () => {

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
          // subheader={
          //   <ListSubheader component="div" id="nested-list-subheader">
          //     Nested List Items
          //   </ListSubheader>
          // }
        >
          {
            MenuLists.map((menuItem, index) => (
              <NavItem menuItem={menuItem} key={`menu-item-key-${index}`} />
            ))
          }
        </List>
      </div>
    </div>
  )
}

export default Sidebar