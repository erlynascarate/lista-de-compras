import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Input,
    Stack,
    TextField,
} from '@mui/material'

const Form = (props) => {
    const {
        list,
        addItem,
        updateItem,
        refForm,
        formText: { formTitle, buttonText },
        handleClose,
        open,
    } = props

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const id = form.id.value
        const itemExists = list.some((item) => item.id === id)

        itemExists === true ? updateItem(form) : addItem(form)

        handleClose()
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle sx={{ textAlign: 'center' }}>{formTitle}</DialogTitle>
            <DialogContent>
                <Stack
                    onSubmit={handleSubmit}
                    alignItems='center'
                    autoComplete='off'
                    component='form'
                    direction='column'
                    ref={refForm}
                    rowGap={2}
                >
                    <Input
                        defaultValue={new Date().toLocaleString()}
                        name='id'
                        type='hidden'
                    />
                    <Grid sx={{ maxInlineSize: '23rem' }} container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                fullWidth
                                inputProps={{
                                    minLength: 3,
                                    maxLength: 28,
                                }}
                                name='name'
                                placeholder='Nombre del Artículo'
                                required
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                defaultValue={1}
                                inputProps={{ min: 1, max: 100000 }}
                                name='quantity'
                                placeholder='1'
                                required
                                type='number'
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                autoComplete='on'
                                inputProps={{
                                    maxLength: 21,
                                }}
                                name='quantifier'
                                placeholder='Artículo(s), Kilo(s), Caja(s)'
                                required
                            />
                        </Grid>
                    </Grid>

                    <Button
                        sx={{
                            background:
                                'linear-gradient(45deg,hsl(214deg 100% 75%) 0%,hsl(222deg 74% 64%) 100%)',
                            boxShadow: '0 3px 5px 0 hsl(222deg 74% 64%)',
                        }}
                        type='submit'
                        variant='contained'
                    >
                        {buttonText}
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default Form
