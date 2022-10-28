import '@styles/List.css'
import EmptyList from '@components/EmptyList'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const List = ({ children, state: { nav, list }, sortList }) => {
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
                                {children}
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
