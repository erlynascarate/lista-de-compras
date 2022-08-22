import { useState, useRef } from 'react';
import categoriesData from '../data/categories';

const initialState = {
    nav: 'shopping-list',
    list: [],
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
        setState({
            ...state,
            list: [newItem, ...state.list],
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
            list: state.list.map((item) =>
                item.id === id.value ? { ...item, ...editedItem } : item
            ),
        });
    };

    const deleteItem = (refForm, refContainer, refDeleteItem) => {
        const id = refForm.current.id.value;
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
        addItem,
        updateItem,
        deleteItem,
        updateChecked,
        changeText,
        refs,
    };
};

export default useInitialState;
