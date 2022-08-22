import React, { useContext } from 'react';
import '@styles/ItemCategories.css';
import AppContext from '@context/AppContext';
import ItemCategory from '@components/ItemCategory';

const ItemCategories = () => {
    const {
        state: { itemCategories },
    } = useContext(AppContext);

    return (
        <fieldset className="item-categories">
            {itemCategories.map(({ id, name, color }) => (
                <ItemCategory key={id} id={id} name={name} color={color} />
            ))}
        </fieldset>
    );
};

export default ItemCategories;
