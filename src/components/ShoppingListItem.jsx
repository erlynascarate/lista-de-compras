import { Checkbox, ListItem, ListItemButton, ListItemText } from '@mui/material'

const ShoppingListItem = ({
    item: { id, name, quantity, quantifier, checked },
    updateChecked,
}) => {
    return (
        <ListItem>
            <ListItemButton
                sx={{
                    paddingBlock: 0,
                    paddingInlineStart: 0,
                    boxShadow: '0 1px 5px 0px hsl(0deg 0% 80%)',
                }}
                onClick={() => updateChecked(id)}
            >
                <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { fontSize: ' 1.875rem' } }}
                    checked={checked}
                />
                <ListItemText
                    primary={name}
                    secondary={`${quantity} ${quantifier}`}
                    sx={{ overflowWrap: 'anywhere' }}
                />
            </ListItemButton>
        </ListItem>
    )
}

export default ShoppingListItem
