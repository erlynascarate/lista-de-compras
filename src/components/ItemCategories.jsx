import '@styles/ItemCategories.css'

const ItemCategories = ({ state: { itemCategories }, render }) => {
    return (
        <fieldset className='item-categories'>
            {itemCategories.map(render)}
        </fieldset>
    )
}

export default ItemCategories
