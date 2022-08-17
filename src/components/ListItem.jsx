import React from 'react';
import '../styles/ListItem.css';

const ListItem = ({
    id,
    name,
    category,
    quantity,
    quantifier,
    checked,
    itemCategories,
    list,
    setList,
}) => {
    const { color } = itemCategories.find((item) => item.id === category);
    const updateChecked = () => {
        setList(
            list.map((item) => {
                if (item.id === id) {
                    return { ...item, checked: !item.checked };
                }
                return item;
            })
        );
    };

    return (
        <li>
            <label className="list-item" htmlFor={id}>
                <input
                    type="checkbox"
                    id={id}
                    className="list-item__checkbox"
                    checked={checked}
                    onChange={updateChecked}
                />
                <span className="list-item__name">{name}</span>
                <span className="list-item__quantity">
                    {quantity} {quantifier}
                </span>
            </label>
        </li>
    );
};

export default ListItem;
