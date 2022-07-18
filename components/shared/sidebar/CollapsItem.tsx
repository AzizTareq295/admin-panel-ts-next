import { ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Link from 'next/link'
import React from 'react'
import { MenuListType } from './interface/MenuLists'

type PropType = {
  menuItem: MenuListType
}

const MenuIconStyle = {
  minWidth: '26px',
}

const MenuItemStyle = {
  '& span': {
    fontSize: '14px',
  }
}

const useStyles = makeStyles({
  menuItem: {
    position: 'relative',

    '& .paper': {
      position: 'absolute',
      left: '0',
      opacity: 0,
      transition: 'all 0.3s ease-in-out',
    },

    '&:hover': {
      '& .paper': {
        position: 'absolute',
        left: '100%',
        opacity: 1,
        minWidth: '160px',
        
      }
    }

  }
})


const CollapsItem: React.FC<PropType> = ({menuItem}) => {

  const classes = useStyles();

  return (
    <>
      <ListItemButton className={classes.menuItem}>
        <ListItemIcon sx={MenuIconStyle}>
          {menuItem.icon}
        </ListItemIcon>
        {
          menuItem.subMenu.length > 0 && 
          <Paper className='paper'>
            {
              menuItem.subMenu.map((submenuItem, index) => (
                <Link href={`${submenuItem.path}`} key={`${menuItem.label}-sub-key-${index}`}>
                  <ListItemButton>
                    <ListItemText primary={submenuItem.label} sx={MenuItemStyle} />
                  </ListItemButton>
                </Link>
              ))
            }
          </Paper>
        }
      </ListItemButton>
    </>
  )
}

export default CollapsItem