import React from 'react';
import '../styles/List.css';

const List = ({ children }) => {
    return (
        <section>
            <ul className="list">{children}</ul>
        </section>
    );
};

export default List;
