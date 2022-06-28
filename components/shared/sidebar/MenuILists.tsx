import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import { MenuListType } from './interface/MenuLists';

const MenuLists: MenuListType[] = [
    {
        label: "Dashboard",
        icon: <DashboardIcon color='secondary' fontSize='small' />,
        path: "/",
        subMenu: []
    },
    {
        label: "Users",
        icon: <PeopleAltIcon color='secondary' fontSize='small' />,
        path: "/users",
        subMenu: []
    },
    {
        label: "Products",
        icon: <InventoryIcon color='secondary' fontSize='small' />,
        path: "/products",
        subMenu: [
            {
                label: "Categories",
                icon: <CategoryIcon color='secondary' fontSize='small' />,
                path: "/products/categories"
            }
        ]
    }
]

export default MenuLists