import React, { useState } from 'react';
import '../styles/AddToTheList.css';
import ItemCategories from './ItemCategories';
import ItemCategory from './ItemCategory';

const AddToTheList = ({
    nav,
    handleSubmit,
    refContainer,
    refForm,
    refInput,
    title,
    setTitle,
    buttonText,
    setButtonText,
    itemCategories,
    refQuantityInput,
    updateQuantifiers,
    quantityPlaceholder,
    completingQuantifiers,
}) => {
    const show = (event) => {
        const pressedContainerOrShowButton =
            event.target === refContainer.current ||
            event.target.closest('.add-to-the-list-show');

        if (pressedContainerOrShowButton) {
            const shown = refContainer.current.classList.toggle(
                'container-add-to-the-list--show'
            );

            if (shown === true) {
                refInput.current.focus();
                setTitle('Agregar nuevo');
                setButtonText('Agregar');
                updateQuantifiers();
            } else {
                refInput.current.blur();
                if (nav === 'edit-list') {
                    refForm.current.reset();
                }
            }
        }
    };

    return (
        <section
            className="container-add-to-the-list"
            ref={refContainer}
            onClick={show}
        >
            <form
                className="add-to-the-list"
                autoComplete="off"
                onSubmit={handleSubmit}
                ref={refForm}
            >
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
                <input
                    className="add-to-the-list__id"
                    type="text"
                    name="id"
                    defaultValue={new Date().toLocaleString()}
                />
                <label
                    className="add-to-the-list__title"
                    htmlFor="add-new-item"
                >
                    {title} artículo
                </label>
                <input
                    id="add-new-item"
                    className="add-to-the-list__input"
                    type="text"
                    name="name"
                    placeholder="Leche"
                    minLength={3}
                    maxLength={28}
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
                <fieldset className="quantity">
                    <legend className="quantity__title">
                        <label htmlFor="quantity__number">
                            Elegir cantidad
                        </label>
                    </legend>
                    <input
                        id="quantity__number"
                        className="quantity__input"
                        type="number"
                        name="quantity"
                        placeholder={1}
                        min={1}
                        maxLength={10}
                        required
                        ref={refQuantityInput}
                        onChange={updateQuantifiers}
                    />
                    <input
                        id="quantity__quantify"
                        className="quantity__input"
                        type="text"
                        name="quantifier"
                        placeholder={quantityPlaceholder}
                        maxLength={21}
                        autoComplete="on"
                        required
                        list="quantify-list"
                    />
                    <datalist id="quantify-list">
                        {completingQuantifiers.map((quantify) => (
                            <option key={quantify} value={quantify} />
                        ))}
                    </datalist>
                </fieldset>
                <input
                    className="add-to-the-list__btn"
                    type="submit"
                    value={buttonText}
                />
            </form>
        </section>
    );
};

export default AddToTheList;
