import React from 'react';
import '../styles/ItemCategories.css';

const ItemCategories = ({ children }) => {
    return (
        <fieldset className="item-categories">
            <span className="item-category">
                <input
                    id="without-category"
                    className="item-category__input"
                    type="radio"
                    name="category"
                    defaultChecked
                />
                <label
                    className="item-category__name"
                    htmlFor="without-category"
                >
                    Sin categoría
                </label>
            </span>
            {children}
        </fieldset>
    );
};

export default ItemCategories;
