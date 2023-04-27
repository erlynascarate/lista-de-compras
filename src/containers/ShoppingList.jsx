import ShoppingListItem from '@components/ShoppingListItem'
// import '@styles/List.css'
import { useOutletContext } from 'react-router-dom'
import List from '@mui/material/List'

const ShoppingList = () => {
    const {
        state,
        state: { list },
        onEmptyList,
        updateChecked,
        deleteItem,
    } = useOutletContext()

    const emptyList = !list.length

    return (
        <section>
            {emptyList === true && onEmptyList()}
            {emptyList === false && (
                <List>
                    {list.map((item) => (
                        <ShoppingListItem
                            key={item.id}
                            item={item}
                            state={state}
                            updateChecked={updateChecked}
                            deleteItem={deleteItem}
                        />
                    ))}
                </List>
            )}
        </section>
    )
}

export default ShoppingList
