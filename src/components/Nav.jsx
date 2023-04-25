import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import BottomNavigation from '@mui/material/BottomNavigation'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import EditIcon from '@mui/icons-material/Edit'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const [value, setValue] = useState(0)

    return (
        <BottomNavigation
            component='nav'
            sx={{ position: 'fixed', insetBlockEnd: '0', insetInline: '0' }}
            showLabels
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
        >
            <BottomNavigationAction
                component={NavLink}
                to='/'
                label='Lista de Compras'
                icon={<FormatListBulletedIcon />}
            />
            <BottomNavigationAction
                component={NavLink}
                to='/edit'
                label='Editar Lista'
                icon={<EditIcon />}
            />
        </BottomNavigation>
    )
}

export default Nav
