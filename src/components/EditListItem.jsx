import {
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

import DragHandleIcon from '@mui/icons-material/DragHandle'

import { Draggable } from 'react-beautiful-dnd'

const EditListItem = ({
    index,
    item: { id, name, quantity, quantifier },
    changeText,
    refs: { refContainer, refForm, refInput, refDeleteItem },
}) => {
    const editItem = () => {
        refContainer.current.classList.add('container-add-to-the-list--show')

        refForm.current.id.value = id
        refForm.current.name.value = name
        refForm.current.quantity.value = quantity
        refForm.current.quantifier.value = quantifier

        const theHeightIsEnough = innerHeight > 700
        if (theHeightIsEnough === true) {
            refInput.current.focus()
        }
        changeText('Actualizar', 'Actualizar')
        // updateQuantifiers();

        refDeleteItem.current.classList.add(
            'add-to-the-list__delele-item--show'
        )
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <ListItem {...provided.draggableProps} ref={provided.innerRef}>
                    <ListItemButton
                        sx={{
                            paddingBlock: 0,
                            paddingInlineStart: 0,
                            boxShadow: '0 1px 5px 0px hsl(0deg 0% 80%)',
                        }}
                        onClick={editItem}
                    >
                        <IconButton
                            color='primary'
                            size='large'
                            {...provided.dragHandleProps}
                        >
                            <DragHandleIcon />
                        </IconButton>
                        <ListItemText
                            primary={name}
                            secondary={`${quantity} ${quantifier}`}
                            sx={{ overflowWrap: 'anywhere' }}
                        />
                        <IconButton color='primary'>
                            <EditIcon />
                        </IconButton>
                    </ListItemButton>
                </ListItem>
            )}
        </Draggable>
    )
}

export default EditListItem
