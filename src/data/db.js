import { openDB } from 'idb'

const dbName = 'outofwater'
const dbVersion = 1

const storeName = 'shoppinglist'
const storeSchema = {
    keyPath: 'id',
}

const db = await openDB(dbName, dbVersion, {
    upgrade(db) {
        db.createObjectStore(storeName, storeSchema)
    },
})

async function updateData(data) {
    const tx = db.transaction(storeName, 'readwrite')
    const store = tx.objectStore(storeName)

    await store.put(data)
    await tx.done
}

async function deleteData(id) {
    const tx = db.transaction(storeName, 'readwrite')
    const store = tx.objectStore(storeName)

    await store.delete(id)
    await tx.done
}

const tx = db.transaction(storeName, 'readonly')
const store = tx.objectStore(storeName)

const initialList = await store.getAll()
initialList.sort((itemA, itemB) => itemA.index - itemB.index)

export { initialList, updateData, deleteData }
