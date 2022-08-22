import React, { useEffect, useRef, useContext } from 'react';
import '@styles/ListItem.css';
import AppContext from '@context/AppContext';

const ListItem = ({
    item: { id, name, category, quantity, quantifier, checked },
}) => {
    const {
        updateChecked,
        state: { itemCategories },
    } = useContext(AppContext);

    const { color } = itemCategories.find((item) => item.id === category);
    const item = useRef();
    useEffect(() => {
        item.current.style.setProperty('--border-color', color);
    }, []);

    return (
        <li>
            <label className="list-item" htmlFor={id} ref={item}>
                <input
                    type="checkbox"
                    id={id}
                    className="list-item__checkbox"
                    checked={checked}
                    onChange={() => updateChecked(id)}
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
