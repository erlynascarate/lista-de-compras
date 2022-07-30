import React from 'react';
import '../styles/ItemCategories.css';

const ItemCategories = ({ children }) => {
    return (
        <fieldset className="item-categories">
            <label className="item-category" htmlFor="without-category">
                <input
                    type="radio"
                    name="category"
                    id="without-category"
                    defaultChecked
                />
                Sin categoría
            </label>
            {children}
        </fieldset>
    );
};

export default ItemCategories;
