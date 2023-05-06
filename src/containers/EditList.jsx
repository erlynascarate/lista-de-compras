import EmptyList from '@components/EmptyList'
import EditListItem from '@components/EditListItem'
import { Box, List } from '@mui/material'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useOutletContext } from 'react-router-dom'

const EditList = () => {
    const { list, sortList, refForm, editOpenForm } = useOutletContext()

    const emptyList = !list.length

    if (emptyList === true) return <EmptyList />

    return (
        <Box component='section'>
            <DragDropContext
                onDragEnd={(result) => {
                    const { source, destination } = result
                    if (!destination || source.index === destination.index)
                        return
                    sortList(source.index, destination.index)
                }}
            >
                <Droppable droppableId='edit-list'>
                    {(provided) => (
                        <List
                            sx={{
                                marginInline: 'auto',
                                maxInlineSize: '33rem',
                            }}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {list.map((item, index) => (
                                <EditListItem
                                    key={item.id}
                                    editOpenForm={editOpenForm}
                                    index={index}
                                    item={item}
                                    refForm={refForm}
                                />
                            ))}
                            {provided.placeholder}
                        </List>
                    )}
                </Droppable>
            </DragDropContext>
        </Box>
    )
}

export default EditList
