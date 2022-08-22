import React, { useContext } from 'react';
import '@styles/List.css';
import AppContext from '@context/AppContext';
import ListItem from '../components/ListItem';
import EditListItem from '@components/EditListItem';

const List = () => {
    const {
        state: { nav, list },
    } = useContext(AppContext);

    return (
        <section>
            <ul className="list">
                {list.map((item) => {
                    switch (nav) {
                        case 'shopping-list':
                            return <ListItem key={item.id} item={item} />;

                        case 'edit-list':
                            return (
                                <EditListItem
                                    key={item.id}
                                    item={item}
                                    // updateQuantifiers={updateQuantifiers}
                                />
                            );
                    }
                })}
            </ul>
        </section>
    );
};

export default List;
