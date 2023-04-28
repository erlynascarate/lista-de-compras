import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Nav from '../components/Nav'

const Header = () => {
    return (
        <Stack
            sx={{
                paddingBlock: 0.8,
                background:
                    'linear-gradient(135deg,hsl(214deg 100% 75%) 0%,hsl(222deg 74% 64%) 100%)',
            }}
            component='header'
            direction='row'
            justifyContent='center'
        >
            <Typography
                color='#fff'
                component='h1'
                fontFamily={'"Dancing Script", cursive'}
                lang='en'
                variant='h4'
            >
                Out of Water
            </Typography>
            <Nav />
        </Stack>
    )
}

export default Header
