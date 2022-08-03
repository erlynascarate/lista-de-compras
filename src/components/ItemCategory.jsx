import React from 'react';
import '../styles/ItemCategory.css';

const ItemCategory = ({ id, name }) => {
    const defaultCheckedItem = id === 'without-category' ? true : false;
    return (
        <span className="item-category">
            <input
                id={id}
                className="item-category__input"
                type="radio"
                name="category"
                value={id}
                defaultChecked={defaultCheckedItem}
            />
            <label className="item-category__name" htmlFor={id}>
                {name}
            </label>
        </span>
    );
};

export default ItemCategory;
