import '@styles/List.css'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const List = ({ state: { nav, list }, sortList, onEmptyList, render }) => {
    const listStyles = {
        maxInlineSize: nav === 'edit-list' ? 40.9 + 'rem' : 'none',
    }

    const emptyList = !list.length

    return (
        <section>
            {emptyList === true && onEmptyList()}
            {emptyList === false && (
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
                                {list.map(render)}
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
