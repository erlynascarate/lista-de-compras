import React from 'react';
import '../styles/ItemCategory.css';

const ItemCategory = ({ id, name }) => {
    return (
        <label className="item-category" htmlFor={id}>
            <input type="radio" name="category" id={id} value={name} />
            {name}
        </label>
    );
};

export default ItemCategory;
