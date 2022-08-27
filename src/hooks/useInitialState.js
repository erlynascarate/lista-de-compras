import { useState, useRef } from 'react';
import categoriesData from '../data/categories';
import { updateData, deleteData, listData } from '../data/db';

const initialState = {
    nav: 'shopping-list',
    list: listData,
    itemCategories: categoriesData,
    title: 'Agregar nuevo',
    buttonText: 'Agregar',
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const updateNav = (event) => {
        const { value } = event.target;
        setState({
            ...state,
            nav: value,
        });
    };

    const sortList = (startIndex, endIndex) => {
        const result = [...state.list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        const listIndex = result.map((item, index) => {
            if (startIndex < endIndex) {
                if (startIndex <= index && index <= endIndex) {
                    updateData({ ...item, index: index });
                }
            } else {
                if (endIndex <= index && index <= startIndex) {
                    updateData({ ...item, index: index });
                }
            }
            return { ...item, index: index };
        });

        setState({
            ...state,
            list: listIndex,
        });
    };

    const addItem = (form) => {
        const { id, name, category, quantity, quantifier } = form;

        const newItem = {
            id: id.value,
            name: name.value,
            category: category.value,
            quantity: quantity.value,
            quantifier: quantifier.value,
            checked: false,
        };

        const listIndex = [newItem, ...state.list].map((item, index) => {
            updateData({ ...item, index: index });
            return { ...item, index: index };
        });

        setState({
            ...state,
            list: listIndex,
        });
    };

    const updateItem = (form) => {
        const { id, name, category, quantity, quantifier } = form;
        const editedItem = {
            id: id.value,
            name: name.value,
            category: category.value,
            quantity: quantity.value,
            quantifier: quantifier.value,
        };
        setState({
            ...state,
            list: state.list.map((item) => {
                if (item.id === id.value) {
                    updateData({ ...item, ...editedItem });
                    return { ...item, ...editedItem };
                }
                return item;
            }),
        });
    };

    const deleteItem = (refForm, refContainer, refDeleteItem) => {
        const id = refForm.current.id.value;

        deleteData(id);
        setState({
            ...state,
            list: state.list.filter((item) => item.id !== id),
        });

        refContainer.current.classList.remove(
            'container-add-to-the-list--show'
        );
        refForm.current.reset();
        refDeleteItem.current.classList.remove(
            'add-to-the-list__delele-item--show'
        );
    };

    const updateChecked = (id) => {
        setState({
            ...state,
            list: state.list.map((item) => {
                if (item.id === id) {
                    updateData({ ...item, checked: !item.checked });
                    return { ...item, checked: !item.checked };
                }
                return item;
            }),
        });
    };

    const changeText = (title, buttonText) => {
        setState({
            ...state,
            title,
            buttonText,
        });
    };

    const refContainer = useRef();
    const refForm = useRef();
    const refInput = useRef();
    const refDeleteItem = useRef();

    const refs = {
        refContainer,
        refForm,
        refInput,
        refDeleteItem,
    };

    return {
        state,
        updateNav,
        sortList,
        addItem,
        updateItem,
        deleteItem,
        updateChecked,
        changeText,
        refs,
    };
};

export default useInitialState;
