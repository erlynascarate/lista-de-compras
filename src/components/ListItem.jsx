import React from "react";

const ListItem = ({ id, children }) => {
    return (
        <li>
            <input type="checkbox" id={id} />
            <label htmlFor={id}>{children}</label>
        </li>
    );
};

export default ListItem;
