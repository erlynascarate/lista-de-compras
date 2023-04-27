import useInitialState from '@hooks/useInitialState'
import Header from '@containers/Header'
import AddToTheList from '@containers/AddToTheList'
import EmptyList from '@components/EmptyList'
import { Outlet } from 'react-router-dom'

import AddIcon from '@mui/icons-material/Add'
import { Fab, Stack, Tooltip } from '@mui/material'

const Home = () => {
    const {
        state,
        addItem,
        updateItem,
        deleteItem,
        changeText,
        refs,
        sortList,
        updateChecked,
    } = useInitialState()
    return (
        <>
            <Header />
            <Stack component='main' sx={{ position: 'relative' }}>
                <AddToTheList
                    state={state}
                    addItem={addItem}
                    updateItem={updateItem}
                    deleteItem={deleteItem}
                    changeText={changeText}
                    refs={refs}
                />
                <Outlet
                    context={{
                        state,
                        sortList,
                        onEmptyList: () => <EmptyList />,
                        updateChecked,
                        deleteItem,
                        changeText,
                        refs,
                    }}
                />
                <Tooltip title='Agregar nuevo artículo'>
                    <Fab
                        color='secondary'
                        aria-label='Agregar'
                        sx={{
                            position: 'absolute',
                            insetBlockEnd: '5%',
                            insetInlineEnd: '5%',
                            background:
                                'linear-gradient(135deg,hsl(320deg 81% 70%) 0%,hsl(320deg 81% 49%) 100%)',
                            boxShadow: '0 3px 15px 0 hsl(320deg 81% 70%)',
                        }}
                    >
                        <AddIcon sx={{ fontSize: '2.5rem', color: '#fff' }} />
                    </Fab>
                </Tooltip>
            </Stack>
        </>
    )
}

export default Home
