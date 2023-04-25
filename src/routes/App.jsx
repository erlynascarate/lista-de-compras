import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@pages/Home'
import ShoppingList from '@containers/ShoppingList'
import EditList from '@containers/EditList'
import NotFound from '@pages/NotFound'

import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'

const theme = createTheme({
    palette: {
        primary: {
            main: '#039be5',
        },
        secondary: {
            main: '#e91e63',
        },
    },
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}>
                        <Route index element={<ShoppingList />} />
                        <Route path='/edit' element={<EditList />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
