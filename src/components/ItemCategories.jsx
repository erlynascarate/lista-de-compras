import '@styles/ItemCategories.css'
import ItemCategory from '@components/ItemCategory'

const ItemCategories = ({ state: { itemCategories }, changePlaceholder }) => {
    return (
        <fieldset className='item-categories'>
            {itemCategories.map(({ id, name, color }) => (
                <ItemCategory
                    key={id}
                    id={id}
                    name={name}
                    color={color}
                    changePlaceholder={changePlaceholder}
                />
            ))}
        </fieldset>
    )
}

export default ItemCategories
