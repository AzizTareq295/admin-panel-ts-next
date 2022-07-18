import React, { useMemo } from 'react'
import { List, Typography } from '@mui/material'
import MenuLists from './MenuILists';
import NavItem from './NavItem';
import WindowSize from 'hooks/windowSize';

const Sidebar: React.FC = () => {

  const { windowWidth } = WindowSize();  

  const sidebarLogoStyle = {
    minHeight: '64px',
    maxHeight: '64px',
    alignItems: 'center',
    display: 'flex',
    fontWeight: 900,
    fontSize: '2rem',
    paddingLeft: '1rem',
  }

  const isSidebarCollapsed = useMemo(() => windowWidth < 1200, [windowWidth]);

  return (
    <div className={`sidebar ${isSidebarCollapsed ? 'collaps-sidebar': ''}`}>
      <div className='sidebar-header'>
        {
          isSidebarCollapsed ?
          <Typography variant='h4' sx={sidebarLogoStyle}>L</Typography>
          :
          <Typography variant='h4' sx={sidebarLogoStyle}>LOGO</Typography>
        }
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
              <NavItem isSidebarCollapsed={isSidebarCollapsed} menuItem={menuItem} key={`menu-item-key-${index}`} />
            ))
          }
        </List>
      </div>
    </div>
  )
}

export default Sidebar