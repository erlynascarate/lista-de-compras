import React from 'react';
import '../styles/ListItem.css';

const ListItem = ({ id, name, category, quantity, itemCategories }) => {
    const { color } = itemCategories.find((item) => item.id === category);

    return (
        <li>
            <label className="list-item" htmlFor={id}>
                <input
                    type="checkbox"
                    id={id}
                    className="list-item__checkbox"
                />
                <span className="list-item__name">{name}</span>
                <span className="list-item__quantity">{quantity}</span>
            </label>
        </li>
    );
};

export default ListItem;
