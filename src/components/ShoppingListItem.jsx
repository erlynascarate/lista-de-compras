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
        <ListItem
            secondaryAction={
                <Tooltip edge='end' placement='left' title='Eliminar artículo'>
                    <IconButton
                        onClick={() => deleteItem(id)}
                        sx={{ color: 'hsl(0deg 96% 57%)' }}
                        size='large'
                    >
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            }
        >
            <ListItemButton
                onClick={() => updateChecked(id)}
                sx={{
                    paddingBlock: 0,
                    boxShadow: '0 1px 5px 0px hsl(0deg 0% 80%)',
                }}
            >
                <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { fontSize: ' 1.875rem' } }}
                    checked={checked}
                    edge='start'
                />
                <ListItemText
                    sx={{
                        overflowWrap: 'anywhere',
                        '&::first-letter': { textTransform: 'uppercase' },
                        color: checked
                            ? 'hsl(0deg 0% 46%)'
                            : 'hsl(0deg 0% 20%)',
                        '& .MuiListItemText-primary': {
                            fontWeight: checked ? 400 : 500,
                            textDecoration: checked ? 'line-through' : 'none',
                        },
                        transition: '0.1s',
                    }}
                    primary={name}
                    secondary={`${quantity} ${quantifier}`}
                />
            </ListItemButton>
        </ListItem>
    )
}

export default ShoppingListItem
