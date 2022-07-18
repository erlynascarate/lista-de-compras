import React, { useState, useRef } from "react";
import "../styles/AddToTheList.css";

const AddToTheList = () => {
    const [list, setList] = useState([]),
        [itemId, setItemId] = useState(1);

    const refInput = useRef();
    const addItem = (event) => {
        event.preventDefault();

        const item = refInput.current.value;
        setList([{ id: itemId, item: item }, ...list]);

        refInput.current.value = "";
        setItemId(itemId + 1);
    };

    return (
        <section>
            <form className="add-to-the-list" onSubmit={addItem}>
                <label className="add-to-the-list__title" htmlFor="new-item">
                    Agregar a la lista
                </label>
                <input
                    id="new-item"
                    className="add-to-the-list__input"
                    type="text"
                    placeholder="1kg arróz"
                    minLength={3}
                    maxLength={20}
                    autoComplete="off"
                    required
                    ref={refInput}
                />
                <input
                    className="add-to-the-list__btn"
                    type="submit"
                    value="Agregar"
                />
            </form>
            <ul>
                {list.map(({ id, item }) => (
                    <li key={id}>{item}</li>
                ))}
            </ul>
        </section>
    );
};

export default AddToTheList;
