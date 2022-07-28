import React, { useRef } from 'react';
import '../styles/AddToTheList.css';

const AddToTheList = ({ addItem, refAddList, refInput }) => {
    const refContainer = useRef(),
        refShowButton = useRef();

    const show = (event) => {
        const pressedContainerOrShowButton =
            event.target == refContainer.current ||
            event.target == refShowButton.current;

        if (pressedContainerOrShowButton) {
            refContainer.current.classList.toggle(
                'container-add-to-the-list--show'
            );
            const shown = refAddList.current.classList.toggle(
                'add-to-the-list--show'
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
            <form
                className="add-to-the-list"
                ref={refAddList}
                onSubmit={addItem}
            >
                <button
                    className="add-to-the-list__show"
                    type="button"
                    ref={refShowButton}
                >
                    +
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
                    maxLength={20}
                    autoComplete="off"
                    required
                    ref={refInput}
                />
                <fieldset className="categories">
                    <input type="radio" name="category" id="diner" />
                    <label htmlFor="diner">Cena</label>
                    <input type="radio" name="category" id="lunch" />
                    <label htmlFor="lunch">Almuerzo</label>
                    <input type="radio" name="category" id="breakfast" />
                    <label htmlFor="breakfast">Desalluno</label>
                </fieldset>
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
