import React, { useState } from 'react'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { MenuListType } from './interface/MenuLists';
import Link from 'next/link';

type PropType = {
  menuItem: MenuListType
}

const MenuItemStyle = {
  '& span': {
    fontSize: '14px',
  }
}

const MenuIconStyle = {
  minWidth: '30px',
}

const NavItem: React.FC<PropType> = ({menuItem}) => {

  const [open, setOpen] = useState<React.SetStateAction<boolean>>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {
        menuItem.subMenu.length > 0 ?
          <ListItemButton onClick={handleClick}>
            <ListItemIcon sx={MenuIconStyle}>
              {menuItem.icon}
            </ListItemIcon>
            <ListItemText primary={menuItem.label} sx={MenuItemStyle} />
            {
              menuItem.subMenu.length > 0 &&(
                open ? <ExpandLess /> : <ExpandMore />)
            }
          </ListItemButton>
        : 
          <Link href={menuItem.path}>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon sx={MenuIconStyle}>
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText primary={menuItem.label} sx={MenuItemStyle} />
            </ListItemButton>
          </Link>
      }
      {
        menuItem.subMenu.length > 0 && menuItem.subMenu.map((submenuItem, index) => (
          <Link href={`${submenuItem.path}`} key={`${menuItem.label}-sub-key-${index}`}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={MenuIconStyle}>
                    {submenuItem.icon}
                  </ListItemIcon>
                  <ListItemText primary={submenuItem.label} sx={MenuItemStyle} />
                </ListItemButton>
              </List>
            </Collapse>
          </Link>
        ))
      }
    </>
  )
}

export default NavItem