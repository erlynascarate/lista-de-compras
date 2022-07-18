import React, { useState, useEffect, useRef } from "react";
import "../styles/AddToTheList.css";
import ListItem from "./ListItem";

const AddToTheList = () => {
    const [list, setList] = useState([]),
        [count, setCount] = useState(0);

    const addItem = (event) => {
        event.preventDefault();

        setCount(count + 1);
    };

    const refInput = useRef();
    useEffect(() => {
        if (count === 0) return;
        const item = refInput.current.value;
        setList([{ id: count + "_item", item: item }, ...list]);
        refInput.current.value = "";
    }, [count]);

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
                    <ListItem key={id} id={id}>
                        {item}
                    </ListItem>
                ))}
            </ul>
        </section>
    );
};

export default AddToTheList;
