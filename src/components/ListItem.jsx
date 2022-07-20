import React from "react";
import "../styles/ListItem.css";

const ListItem = ({ id, children }) => {
    return (
        <li className="list-item">
            <input type="checkbox" id={id} className="list-item__checkbox" />
            <label htmlFor={id} className="list-item__name">
                {children}
            </label>
        </li>
    );
};

export default ListItem;
