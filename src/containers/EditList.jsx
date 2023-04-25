// import '@styles/List.css'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useOutletContext } from 'react-router-dom'
import EditListItem from '@components/EditListItem'
import { List } from '@mui/material'

const EditList = () => {
    const {
        state: { list },
        sortList,
        onEmptyList,
        changeText,
        refs,
    } = useOutletContext()

    const emptyList = !list.length

    return (
        <section>
            {emptyList === true && onEmptyList()}
            {emptyList === false && (
                <DragDropContext
                    onDragEnd={(result) => {
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
                        {(provided) => (
                            <List
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                sx={{
                                    marginInline: 'auto',
                                    maxInlineSize: '40.9rem',
                                }}
                            >
                                {list.map((item, index) => (
                                    <EditListItem
                                        key={item.id}
                                        index={index}
                                        item={item}
                                        changeText={changeText}
                                        refs={refs}
                                    />
                                ))}
                                {provided.placeholder}
                            </List>
                        )}
                    </Droppable>
                </DragDropContext>
            )}
        </section>
    )
}

export default EditList
