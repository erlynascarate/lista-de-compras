import { useContext } from 'react'
import '@styles/List.css'
import AppContext from '@context/AppContext'
import EmptyList from '@components/EmptyList'
import ListItem from '@components/ListItem'
import EditListItem from '@components/EditListItem'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const List = () => {
    const {
        state: { nav, list },
        sortList,
    } = useContext(AppContext)

    const listStyles = {
        maxInlineSize: nav === 'edit-list' ? 40.9 + 'rem' : 'none',
    }

    return (
        <section>
            {list.length === 0 ? (
                <EmptyList />
            ) : (
                <DragDropContext
                    onDragEnd={result => {
                        const { source, destination } = result
                        if (
                            !destination ||
                            source.index === destination.index
                        ) {
                            return
                        }
                        sortList(source.index, destination.index)
                    }}
                >
                    <Droppable droppableId='edit-list'>
                        {provided => (
                            <ul
                                {...provided.droppableProps}
                                className='list'
                                ref={provided.innerRef}
                                style={listStyles}
                            >
                                {list.map((item, index) => {
                                    switch (nav) {
                                        case 'shopping-list':
                                            return (
                                                <ListItem
                                                    key={item.id}
                                                    item={item}
                                                />
                                            )

                                        case 'edit-list':
                                            return (
                                                <EditListItem
                                                    key={item.id}
                                                    index={index}
                                                    item={item}
                                                    // updateQuantifiers={updateQuantifiers}
                                                />
                                            )
                                        default:
                                            return false
                                    }
                                })}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            )}
        </section>
    )
}

export default List
