import React, { useState, useEffect, useRef } from 'react';
import '../styles/global.css';
import Header from './Header';
import Nav from './Nav';
import AddToTheList from './AddToTheList';
import List from './List';
import ListItem from './ListItem';

const categories = [
    {
        id: 'without-category',
        name: 'Sin Categoría',
        color: 'hsl(210deg 100% 50%)',
    },
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

let addItemEvent;
const App = () => {
    const [list, setList] = useState([]),
        [count, setCount] = useState(0),
        [itemCategories, setItemCategories] = useState(categories);

    const addItem = (event) => {
        event.preventDefault();
        addItemEvent = event;

        setCount(count + 1);
    };
    const refContainer = useRef(),
        refInput = useRef();
    useEffect(() => {
        if (count === 0) return;
        const form = addItemEvent.target;
        const { name, category, quantity } = form;

        const newItem = {
            id: count + '_item',
            name: name.value,
            category: category.value,
            quantity: `${quantity[0].value} ${quantity[1].value}`,
        };
        setList([newItem, ...list]);

        form.reset();
        refContainer.current.classList.remove(
            'container-add-to-the-list--show'
        );
    }, [count]);

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <main>
                <AddToTheList
                    addItem={addItem}
                    refContainer={refContainer}
                    refInput={refInput}
                    itemCategories={itemCategories}
                />
                <List>
                    {list.map(({ id, name, category, quantity }) => (
                        <ListItem
                            key={id}
                            id={id}
                            name={name}
                            category={category}
                            quantity={quantity}
                            itemCategories={itemCategories}
                        />
                    ))}
                </List>
            </main>
        </>
    );
};

export default App;
