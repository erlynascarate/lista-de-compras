import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import BottomNavigation from '@mui/material/BottomNavigation'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import EditIcon from '@mui/icons-material/Edit'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const routes = [
    {
        path: '/',
        label: 'Lista de Compras',
        icon: <FormatListBulletedIcon />,
    },
    {
        path: '/edit',
        label: 'Editar Lista',
        icon: <EditIcon />,
    },
]

const Nav = () => {
    const location = useLocation()

    const [value, setValue] = useState(location.pathname)

    const navigation = (event, newValue) => setValue(newValue)

    return (
        <BottomNavigation
            onChange={navigation}
            sx={{
                position: 'fixed',
                insetBlockEnd: '0',
                insetInline: '0',
                boxShadow: '0 0 4px 0 hsl(0deg, 0%, 80%)',
            }}
            component='nav'
            showLabels
            value={value}
        >
            {routes.map(({ path, label, icon }) => (
                <BottomNavigationAction
                    key={path}
                    component={NavLink}
                    icon={icon}
                    label={label}
                    to={path}
                    value={path}
                />
            ))}
        </BottomNavigation>
    )
}

export default Nav
