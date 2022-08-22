import React, { useState, useEffect, useRef } from 'react';
import '@styles/ItemCategory.css';

const ItemCategory = ({ id, name, color }) => {
    const itemName = useRef();

    useEffect(() => {
        itemName.current.style.setProperty('--bg-color', color);
    }, []);

    return (
        <span className="item-category">
            <input
                id={id}
                className="item-category__input"
                type="radio"
                name="category"
                value={id}
                required
            />
            <label className="item-category__name" htmlFor={id} ref={itemName}>
                {name}
            </label>
        </span>
    );
};

export default ItemCategory;
