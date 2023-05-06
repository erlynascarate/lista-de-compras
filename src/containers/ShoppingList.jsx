import EmptyList from '@components/EmptyList'
import ShoppingListItem from '@components/ShoppingListItem'
import { Box, Collapse, List } from '@mui/material'
import { useOutletContext } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group'

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
                <TransitionGroup>
                    {list.map((item) => (
                        <Collapse key={item.id}>
                            <ShoppingListItem
                                item={item}
                                updateChecked={updateChecked}
                                deleteItem={deleteItem}
                            />
                        </Collapse>
                    ))}
                </TransitionGroup>
            </List>
        </Box>
    )
}

export default ShoppingList
