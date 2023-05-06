import {
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText,
    Tooltip,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

import DragHandleIcon from '@mui/icons-material/DragHandle'

import { Draggable } from 'react-beautiful-dnd'

const EditListItem = (props) => {
    const {
        editOpenForm,
        index,
        item: { id, name, quantity, quantifier },
        refForm,
    } = props

    const editItem = async () => {
        await editOpenForm()

        refForm.current.id.value = id
        refForm.current.name.value = name
        refForm.current.quantity.value = quantity
        refForm.current.quantifier.value = quantifier
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <ListItem {...provided.draggableProps} ref={provided.innerRef}>
                    <ListItemButton
                        onClick={editItem}
                        sx={{
                            paddingBlock: 0,
                            paddingInlineStart: 0.25,
                            paddingInlineEnd: 1,
                            bgcolor: '#fff',
                            boxShadow: '0 1px 5px 0px hsl(0deg 0% 80%)',
                        }}
                    >
                        <Tooltip title='Mover artículo'>
                            <IconButton
                                color='primary'
                                size='large'
                                {...provided.dragHandleProps}
                            >
                                <DragHandleIcon />
                            </IconButton>
                        </Tooltip>

                        <ListItemText
                            sx={{
                                marginInlineStart: 0.25,
                                '&::first-letter': {
                                    textTransform: 'uppercase',
                                },
                                '& .MuiListItemText-primary': {
                                    fontWeight: 500,
                                },
                                color: 'hsl(0deg 0% 20%)',
                                overflowWrap: 'anywhere',
                            }}
                            primary={name}
                            secondary={`${quantity} ${quantifier}`}
                        />

                        <Tooltip title='Editar artículo'>
                            <IconButton color='primary'>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    </ListItemButton>
                </ListItem>
            )}
        </Draggable>
    )
}

export default EditListItem
