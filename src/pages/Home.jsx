import useInitialState from '@hooks/useInitialState'
import Header from '@containers/Header'
import AddToTheList from '@containers/AddToTheList'
import EmptyList from '@components/EmptyList'
import { Outlet } from 'react-router-dom'

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
            <main>
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
                        changeText,
                        refs,
                    }}
                />
            </main>
        </>
    )
}

export default Home
