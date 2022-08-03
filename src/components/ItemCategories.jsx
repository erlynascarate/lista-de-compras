import React from 'react';
import '../styles/ItemCategories.css';

const ItemCategories = ({ children }) => {
    return <fieldset className="item-categories">{children}</fieldset>;
};

export default ItemCategories;
