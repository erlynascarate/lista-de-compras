import React from 'react';
import '../styles/List.css';

const List = ({ children }) => {
    return <ul className="list">{children}</ul>;
};

export default List;
