import React from 'react';
import '../styles/EditListItem.css';

const EditListItem = ({ id, name, quantity }) => {
    return (
        <li>
            <div className="edit-list-item">
                <button className="edit-list-item__drag-btn">#</button>
                <div className="edit-list-item-description">
                    <span className="list-item__name">{name}</span>
                    <span className="list-item__quantity">{quantity}</span>
                    <button className="edit-list-item-description__edit-btn">
                        #
                    </button>
                </div>
            </div>
        </li>
    );
};

export default EditListItem;
