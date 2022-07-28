import React, { useState, useEffect, useRef } from 'react';
import '../styles/global.css';
import Header from './Header';
import Nav from './Nav';
import AddToTheList from './AddToTheList';
import List from './List';
import ListItem from './ListItem';

const App = () => {
    const [list, setList] = useState([]),
        [count, setCount] = useState(0);

    const addItem = (event) => {
        event.preventDefault();

        setCount(count + 1);
    };

    const refInput = useRef(),
        refAddList = useRef();
    useEffect(() => {
        if (count === 0) return;
        const item = refInput.current.value;
        setList([{ id: count + '_item', item: item }, ...list]);

        refAddList.current.reset();
    }, [count]);

    return (
        <>
            <Header>
                <Nav />
            </Header>
            <main>
                <List>
                    {list.map(({ id, item }) => (
                        <ListItem key={id} id={id}>
                            {item}
                        </ListItem>
                    ))}
                </List>
            </main>
            <AddToTheList
                addItem={addItem}
                refAddList={refAddList}
                refInput={refInput}
            />
        </>
    );
};

export default App;
