import useInitialState from '../hooks/useInitialState'
import Header from '@containers/Header'
import Form from '../containers/Form'
import { Fab, Stack, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Outlet } from 'react-router-dom'

const Home = () => {
    const {
        list,
        sortList,
        addItem,
        updateItem,
        updateChecked,
        deleteItem,
        refForm,
        formText,
        editOpenForm,
        handleClickOpen,
        handleClose,
        open,
    } = useInitialState()

    return (
        <Stack sx={{ minBlockSize: '100vh' }}>
            <Header />
            <Stack
                sx={{
                    '--nav-height': '56px',
                    position: 'relative',
                    flexGrow: 1,
                    marginBlockEnd: 'var(--nav-height)',
                }}
                component='main'
            >
                <Form
                    list={list}
                    addItem={addItem}
                    updateItem={updateItem}
                    refForm={refForm}
                    formText={formText}
                    handleClose={handleClose}
                    open={open}
                />
                <Outlet
                    context={{
                        list,
                        sortList,
                        updateChecked,
                        deleteItem,
                        refForm,
                        editOpenForm,
                        handleClickOpen,
                        handleClose,
                        open,
                    }}
                />
                <Tooltip
                    onClick={handleClickOpen}
                    title='Agregar nuevo artículo'
                >
                    <Fab
                        sx={{
                            position: 'fixed',
                            insetBlockEnd: 'calc(0% + 28px)',
                            insetInlineEnd: 'calc(50% - 28px)',
                            background:
                                'linear-gradient(135deg,hsl(320deg 81% 70%) 0%,hsl(320deg 81% 49%) 100%)',
                            boxShadow: '0 3px 15px 0 hsl(320deg 81% 70%)',
                        }}
                        aria-label='Agregar'
                        color='secondary'
                    >
                        <AddIcon sx={{ fontSize: '2.5rem', color: '#fff' }} />
                    </Fab>
                </Tooltip>
            </Stack>
        </Stack>
    )
}

export default Home
