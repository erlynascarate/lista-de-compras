import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Nav from '../components/Nav'

const Header = () => {
    return (
        <Stack
            component='header'
            sx={{ '--white': 'hsl(0deg 0% 100%)', '--primary': '#039be5' }}
            bgcolor='var(--primary)'
            direction='row'
            justifyContent='center'
        >
            <Typography variant='h4' component='h1' lang='en'>
                Out of Water
            </Typography>
            <Nav />
        </Stack>
    )
}

export default Header
