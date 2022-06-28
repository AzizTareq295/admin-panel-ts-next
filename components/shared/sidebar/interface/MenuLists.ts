export interface MenuListType {
    label: string,
    icon: React.ReactNode,
    path: string
    subMenu: {
        label: string,
        icon: React.ReactNode,
        path: string
    }[]
}