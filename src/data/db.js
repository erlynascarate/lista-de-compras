import { openDB } from 'idb'

// Using https://github.com/jakearchibald/idb
const db = await openDB('outofwater', 1, {
    upgrade(db, oldVersion, newVersion, transaction) {
        // Switch over the oldVersion, *without breaks*, to allow the database to be incrementally upgraded.
        switch (oldVersion) {
            case 0:
            // Placeholder to execute when database is created (oldVersion is 0)
            // eslint-disable-next-line no-fallthrough
            case 1:
                // Create a store of objects
                db.createObjectStore('shoppinglist', {
                    // The `id` property of the object will be the key, and be incremented automatically
                    keyPath: 'id',
                })
        }
    },
})

const tx = db.transaction('shoppinglist', 'readonly')
const store = tx.objectStore('shoppinglist')

const listData = await store.getAll()
listData.sort((itemA, itemB) => itemA.index - itemB.index)

async function updateData(data) {
    const tx = db.transaction('shoppinglist', 'readwrite')
    const store = tx.objectStore('shoppinglist')

    await store.put(data)
    await tx.done
}

async function deleteData(id) {
    const tx = db.transaction('shoppinglist', 'readwrite')
    const store = tx.objectStore('shoppinglist')
    // Because in our case the `id` is the key, we would
    // have to know in advance the value of the id to
    // retrieve the record
    await store.delete(id)
    await tx.done
}

export { updateData, deleteData, listData }
