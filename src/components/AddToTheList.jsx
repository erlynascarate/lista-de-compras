import React, { useState, useRef } from 'react';
import '../styles/AddToTheList.css';
import ItemCategories from './ItemCategories';
import ItemCategory from './ItemCategory';

const categories = [
    {
        id: 'desalluno',
        name: 'Desalluno',
        color: '#ff0',
    },
    {
        id: 'carne',
        name: 'Carne',
        color: '#ff0',
    },
    {
        id: 'bebidas',
        name: 'Bebidas',
        color: '#ff0',
    },
    {
        id: 'limpieza',
        name: 'Limpieza',
        color: '#ff0',
    },
    {
        id: 'herramientas',
        name: 'Herramientas',
        color: '#ff0',
    },
];

const AddToTheList = ({ addItem, refInput }) => {
    const [itemCategories, setItemCategories] = useState(categories);

    const refContainer = useRef();

    const show = (event) => {
        const pressedContainerOrShowButton =
            event.target === refContainer.current ||
            event.target.closest('.add-to-the-list-show');

        if (pressedContainerOrShowButton) {
            const shown = refContainer.current.classList.toggle(
                'container-add-to-the-list--show'
            );

            shown ? refInput.current.focus() : refInput.current.blur();
        }
    };

    return (
        <section
            className="container-add-to-the-list"
            ref={refContainer}
            onClick={show}
        >
            <form className="add-to-the-list" onSubmit={addItem}>
                <button className="add-to-the-list-show" type="button">
                    <svg
                        className="add-to-the-list-show__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        {/* ! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                        <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                    </svg>
                </button>
                <label
                    className="add-to-the-list__title"
                    htmlFor="add-new-item"
                >
                    Agregar nuevo elemento
                </label>
                <input
                    id="add-new-item"
                    className="add-to-the-list__input"
                    type="text"
                    placeholder="Leche"
                    minLength={3}
                    maxLength={28}
                    autoComplete="off"
                    required
                    ref={refInput}
                />
                <ItemCategories>
                    {itemCategories.map(({ id, name, color }) => (
                        <ItemCategory
                            key={id}
                            id={id}
                            name={name}
                            color={color}
                        />
                    ))}
                </ItemCategories>
                <input
                    className="add-to-the-list__btn"
                    type="submit"
                    value="Agregar"
                />
            </form>
        </section>
    );
};

export default AddToTheList;
