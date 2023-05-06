import EmptyList from '@components/EmptyList'
import ShoppingListItem from '@components/ShoppingListItem'
import { Box, List } from '@mui/material'
import { useOutletContext } from 'react-router-dom'

const ShoppingList = () => {
    const { list, updateChecked, deleteItem } = useOutletContext()

    const emptyList = !list.length

    if (emptyList === true) return <EmptyList />

    return (
        <Box component='section'>
            <List
                sx={{
                    marginInline: 'auto',
                    maxInlineSize: '33rem',
                }}
            >
                {list.map((item) => (
                    <ShoppingListItem
                        key={item.id}
                        item={item}
                        updateChecked={updateChecked}
                        deleteItem={deleteItem}
                    />
                ))}
            </List>
        </Box>
    )
}

export default ShoppingList
