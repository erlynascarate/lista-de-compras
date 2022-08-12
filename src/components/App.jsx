import React, { useState, useEffect, useRef } from 'react';
import '../styles/global.css';
import Header from './Header';
import Nav from './Nav';
import AddToTheList from './AddToTheList';
import List from './List';
import ListItem from './ListItem';
import EditListItem from './EditListItem';

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

const quantifies = [
    'Artículo',
    'Botella',
    'Caja',
    'Kilo',
    'Litro',
    'Metro',
    'Sol',
];

let addItemEvent;
const App = () => {
    const [nav, setNav] = useState('shopping-list');

    const [list, setList] = useState([]),
        [count, setCount] = useState(0),
        [itemCategories, setItemCategories] = useState(categories);

    const [quantifiersList, setQuantifiersList] = useState(quantifies);
    const [quantityPlaceholder, setQuantityPlaceholder] = useState(
        'Artículo, Kilo, Caja, etc'
    );
    const [completingQuantifiers, setCompletingQuantifiers] =
        useState(quantifiersList);

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
        setQuantityPlaceholder('Artículo, Kilo, Caja, etc');
        setCompletingQuantifiers(quantifiersList);
    }, [count]);

    const updateQuantifiers = (event) => {
        const quantity = event.target.value;
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
                    addItem={addItem}
                    refContainer={refContainer}
                    refInput={refInput}
                    itemCategories={itemCategories}
                    updateQuantifiers={updateQuantifiers}
                    quantityPlaceholder={quantityPlaceholder}
                    completingQuantifiers={completingQuantifiers}
                />
                <List>
                    {list.map(({ id, name, category, quantity }) => {
                        switch (nav) {
                            case 'shopping-list':
                                return (
                                    <ListItem
                                        key={id}
                                        id={id}
                                        name={name}
                                        category={category}
                                        quantity={quantity}
                                        itemCategories={itemCategories}
                                    />
                                );
                            case 'edit-list':
                                return (
                                    <EditListItem
                                        key={id}
                                        id={id}
                                        name={name}
                                        quantity={quantity}
                                    />
                                );
                        }
                    })}
                </List>
            </main>
        </>
    );
};

export default App;
