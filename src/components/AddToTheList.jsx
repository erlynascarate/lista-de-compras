import React from "react";
import "../styles/AddToTheList.css";

const AddToTheList = () => {
    return (
        <form className="add-to-the-list">
            <label className="add-to-the-list__title" htmlFor="new-item">
                Agregar a la lista
            </label>
            <input
                id="new-item"
                className="add-to-the-list__input"
                type="text"
                placeholder="1kg arróz"
                required
            />
            <input
                id="add"
                className="add-to-the-list__btn"
                type="submit"
                value="Agregar"
            />
        </form>
    );
};

export default AddToTheList;
