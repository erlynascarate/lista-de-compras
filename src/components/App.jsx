import React, { useState, useRef } from 'react';
import '../styles/global.css';
import Header from './Header';
import Nav from './Nav';
import AddToTheList from './AddToTheList';
import List from './List';
import ListItem from './ListItem';
import EditListItem from './EditListItem';

import categoriesData from '../data/categories';
import quantifiesData from '../data/quantifies';

const App = () => {
    const [nav, setNav] = useState('shopping-list');
    const [title, setTitle] = useState('Agregar nuevo');
    const [buttonText, setButtonText] = useState('Agregar');

    const [list, setList] = useState([]);
    const [itemCategories, setItemCategories] = useState(categoriesData);

    const refContainer = useRef();
    const refForm = useRef();
    const refInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const itemExists = list.some((item) => item.id == form.id.value);

        itemExists === true ? updateItem(form) : addItem(form);

        form.reset();
        refContainer.current.classList.remove(
            'container-add-to-the-list--show'
        );
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
        setList([newItem, ...list]);
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
        setList(
            list.map((item) =>
                item.id === id.value ? { ...item, ...editedItem } : item
            )
        );
    };

    const [quantifiersList, setQuantifiersList] = useState(quantifiesData);

    const [quantityPlaceholder, setQuantityPlaceholder] = useState(
        'Artículo, Kilo, Caja, etc'
    );
    const [completingQuantifiers, setCompletingQuantifiers] =
        useState(quantifiersList);

    const refQuantityInput = useRef();
    const updateQuantifiers = () => {
        const quantity = refQuantityInput.current.value;
        if (quantity > 1) {
            setQuantityPlaceholder('Artículos, Kilos, Cajas');

            const listOfQuantifiersInPlural = quantifiersList.map((name) => {
                const lastLetter = name[name.length - 1];
                const lastLetterIsAVowel =
                    lastLetter === 'a' ||
                    lastLetter === 'e' ||
                    lastLetter === 'i' ||
                    lastLetter === 'o' ||
                    lastLetter === 'u';

                if (lastLetterIsAVowel === true) {
                    return name + 's';
                }

                return name + 'es';
            });
            setCompletingQuantifiers(listOfQuantifiersInPlural);
        } else {
            setQuantityPlaceholder('Artículo, Kilo, Caja, etc');
            setCompletingQuantifiers(quantifiersList);
        }
    };

    return (
        <>
            <Header>
                <Nav setNav={setNav} />
            </Header>
            <main>
                <AddToTheList
                    nav={nav}
                    handleSubmit={handleSubmit}
                    refContainer={refContainer}
                    refForm={refForm}
                    refInput={refInput}
                    title={title}
                    setTitle={setTitle}
                    buttonText={buttonText}
                    setButtonText={setButtonText}
                    itemCategories={itemCategories}
                    refQuantityInput={refQuantityInput}
                    updateQuantifiers={updateQuantifiers}
                    quantityPlaceholder={quantityPlaceholder}
                    completingQuantifiers={completingQuantifiers}
                />
                <List>
                    {list.map(
                        ({
                            id,
                            name,
                            category,
                            quantity,
                            quantifier,
                            checked,
                        }) => {
                            switch (nav) {
                                case 'shopping-list':
                                    return (
                                        <ListItem
                                            key={id}
                                            id={id}
                                            name={name}
                                            category={category}
                                            quantity={quantity}
                                            quantifier={quantifier}
                                            checked={checked}
                                            itemCategories={itemCategories}
                                            list={list}
                                            setList={setList}
                                        />
                                    );
                                case 'edit-list':
                                    return (
                                        <EditListItem
                                            key={id}
                                            id={id}
                                            name={name}
                                            category={category}
                                            quantity={quantity}
                                            quantifier={quantifier}
                                            refContainer={refContainer}
                                            refForm={refForm}
                                            setTitle={setTitle}
                                            setButtonText={setButtonText}
                                            updateQuantifiers={
                                                updateQuantifiers
                                            }
                                        />
                                    );
                            }
                        }
                    )}
                </List>
            </main>
        </>
    );
};

export default App;
