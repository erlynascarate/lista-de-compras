import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText,
    Tooltip,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const ShoppingListItem = (props) => {
    const {
        item: { id, name, quantity, quantifier, checked },
        updateChecked,
        deleteItem,
    } = props

    return (
        <ListItem>
            <ListItemButton
                onClick={() => updateChecked(id)}
                sx={{
                    paddingBlock: 0,
                    paddingInlineStart: 0,
                    paddingInlineEnd: 0.5,
                    boxShadow: '0 1px 5px 0px hsl(0deg 0% 80%)',
                }}
            >
                <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { fontSize: ' 1.875rem' } }}
                    checked={checked}
                />
                <ListItemText
                    sx={{ overflowWrap: 'anywhere' }}
                    primary={name}
                    secondary={`${quantity} ${quantifier}`}
                />
                <Tooltip title='Eliminar artículo'>
                    <IconButton
                        onClick={() => deleteItem(id)}
                        sx={{ color: 'hsl(0deg 96% 57%)' }}
                        size='large'
                    >
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </ListItemButton>
        </ListItem>
    )
}

export default ShoppingListItem
