import useInitialState from '@hooks/useInitialState'
import '@styles/global.css'
import Header from '@containers/Header'
import Nav from '@components/Nav'
import AddToTheList from '@containers/AddToTheList'
import ItemCategories from '@components/ItemCategories'
import List from '@containers/List'
import ListItem from '@components/ListItem'
import EditListItem from '@components/EditListItem'

const Home = () => {
    const {
        updateNav,
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
            <Header>
                <Nav updateNav={updateNav} />
            </Header>
            <main>
                <AddToTheList
                    state={state}
                    addItem={addItem}
                    updateItem={updateItem}
                    deleteItem={deleteItem}
                    changeText={changeText}
                    refs={refs}
                >
                    <ItemCategories state={state} />
                </AddToTheList>
                <List state={state} sortList={sortList}>
                    {state.list.map((item, index) => {
                        switch (state.nav) {
                            case 'shopping-list':
                                return (
                                    <ListItem
                                        key={item.id}
                                        item={item}
                                        state={state}
                                        updateChecked={updateChecked}
                                    />
                                )

                            case 'edit-list':
                                return (
                                    <EditListItem
                                        key={item.id}
                                        index={index}
                                        item={item}
                                        state={state}
                                        changeText={changeText}
                                        refs={refs}
                                        // updateQuantifiers={updateQuantifiers}
                                    />
                                )
                            default:
                                return false
                        }
                    })}
                </List>
            </main>
        </>
    )
}

export default Home
