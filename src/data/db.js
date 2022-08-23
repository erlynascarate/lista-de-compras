import { openDB } from 'idb';

// Using https://github.com/jakearchibald/idb
const db = await openDB('cookbook', 1, {
    upgrade(db, oldVersion, newVersion, transaction) {
        // Switch over the oldVersion, *without breaks*, to allow the database to be incrementally upgraded.
        switch (oldVersion) {
            case 0:
            // Placeholder to execute when database is created (oldVersion is 0)
            case 1:
                // Create a store of objects
                const store = db.createObjectStore('recipes', {
                    // The `id` property of the object will be the key, and be incremented automatically
                    keyPath: 'id',
                });
        }
    },
});

async function addData(data) {
    const tx = await db.transaction('recipes', 'readwrite');
    const store = tx.objectStore('recipes');
    store.add(data);
    await tx.done;
    console.log('Agregado al db');
}

async function getData(id) {
    const tx = await db.transaction('recipes', 'readonly');
    const store = tx.objectStore('recipes');
    // Because in our case the `id` is the key, we would
    // have to know in advance the value of the id to
    // retrieve the record
    const value = await store.get(id);
    console.log(value);
    return value;
}

const tx = await db.transaction('recipes', 'readonly');
const store = tx.objectStore('recipes');

const listData = await store.getAll();

async function deleteData(id) {
    const tx = await db.transaction('recipes', 'readwrite');
    const store = tx.objectStore('recipes');
    // Because in our case the `id` is the key, we would
    // have to know in advance the value of the id to
    // retrieve the record
    const value = await store.delete(id);
    console.log(value);
    await tx.done;
}

async function updateData(data) {
    const tx = await db.transaction('recipes', 'readwrite');
    const store = tx.objectStore('recipes');

    const value = await store.put(data);
    console.log(value);
    await tx.done;
}

export { addData, getData, updateData, deleteData, listData };
