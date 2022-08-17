import React from 'react';
import '../styles/EditListItem.css';

const EditListItem = ({
    id,
    name,
    category,
    quantity,
    quantifier,
    refContainer,
    refForm,
    setTitle,
    setButtonText,
    updateQuantifiers,
}) => {
    const editItem = () => {
        refContainer.current.classList.add('container-add-to-the-list--show');

        refForm.current.id.value = id;
        refForm.current.name.value = name;
        refForm.current.category.value = category;
        refForm.current.quantity.value = quantity;
        refForm.current.quantifier.value = quantifier;

        setTitle('Actualizar');
        setButtonText('Actualizar');
        updateQuantifiers();
    };

    return (
        <li>
            <div className="edit-list-item">
                <button className="edit-list-item__drag-btn">=</button>
                <div className="edit-list-item-description" onClick={editItem}>
                    <span className="list-item__name">{name}</span>
                    <span className="list-item__quantity">
                        {quantity} {quantifier}
                    </span>
                    <button className="edit-list-item-description__edit-btn">
                        #
                    </button>
                </div>
            </div>
        </li>
    );
};

export default EditListItem;
