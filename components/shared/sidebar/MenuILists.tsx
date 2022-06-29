import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import TableChartIcon from '@mui/icons-material/TableChart';
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
        label: "Components",
        icon: <InventoryIcon color='secondary' fontSize='small' />,
        path: "#",
        subMenu: [
            {
                label: "Table",
                icon: <TableChartIcon color='secondary' fontSize='small' />,
                path: "/components/table"
            }
        ]
    }
]

export default MenuLists