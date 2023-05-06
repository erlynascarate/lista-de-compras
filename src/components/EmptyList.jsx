import { Stack, Typography } from '@mui/material'

const EmptyList = () => {
    return (
        <Stack
            sx={{
                rowGap: 2,
                justifyContent: 'center',
                flexGrow: 'inherit',
                alignItems: 'center',
                marginInline: 'auto',
                paddingBlock: '20px',
                inlineSize: '83%',
                maxInlineSize: '330px',
                color: 'hsl(0deg 0% 40%)',
                textAlign: 'center',
            }}
            component='section'
        >
            <Typography sx={{ fontWeight: 500 }} component='h2' variant='h5'>
                ¡Esta lista está vacía!
            </Typography>
            <Typography>
                Agrega un artículo a la lista pulsando el botón de abajo
            </Typography>
        </Stack>
    )
}

export default EmptyList
