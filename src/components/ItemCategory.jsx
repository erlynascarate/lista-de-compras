import React, { useEffect, useRef, useContext } from 'react';
import '@styles/ItemCategory.css';
import AppContext from '@context/AppContext';

const ItemCategory = ({ id, name, color }) => {
    const { changePlaceholder } = useContext(AppContext);

    const itemName = useRef();

    const defaultC = 'without-category';

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
                defaultChecked={id === defaultC && true}
                required
                onChange={changePlaceholder}
            />
            <label className="item-category__name" htmlFor={id} ref={itemName}>
                {name}
            </label>
        </span>
    );
};

export default ItemCategory;
