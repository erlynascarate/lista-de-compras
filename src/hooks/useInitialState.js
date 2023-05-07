import { useRef, useReducer, useState } from 'react'
import { initialList, updateData, deleteData } from '../data/db'

const TYPES = {
    SORTED: Symbol('Sort the shopping list'),
    ADDED: Symbol('Add to shopping list'),
    UPDATED: Symbol('Update a shopping list item'),
    CHANGED_CHECK: Symbol('Change the check of a shopping list item'),
    DELETED: Symbol('Delete a shopping list item'),
}

function listReducer(list, action) {
    switch (action.type) {
        case TYPES.SORTED: {
            const result = [...list]
            const [removed] = result.splice(action.startIndex, 1)
            result.splice(action.endIndex, 0, removed)

            const indexedList = result.map((item, index) => {
                if (item.index !== index) {
                    updateData({ ...item, index })
                }
                return { ...item, index }
            })

            return indexedList
        }

        case TYPES.ADDED: {
            const { id, name, quantity, quantifier } = action.form

            const newItem = {
                id: id.value,
                name: name.value,
                quantity: quantity.value,
                quantifier: quantifier.value,
                checked: false,
            }

            const indexedList = [newItem, ...list].map((item, index) => {
                updateData({ ...item, index })
                return { ...item, index }
            })

            return indexedList
        }

        case TYPES.UPDATED: {
            const { id, name, quantity, quantifier } = action.form

            const editedItem = {
                name: name.value,
                quantity: quantity.value,
                quantifier: quantifier.value,
            }

            const updatedList = list.map((item) => {
                if (item.id === id.value) {
                    updateData({ ...item, ...editedItem })
                    return { ...item, ...editedItem }
                }
                return item
            })

            return updatedList
        }

        case TYPES.CHANGED_CHECK: {
            const updatedList = list.map((item) => {
                if (item.id === action.id) {
                    updateData({ ...item, checked: !item.checked })
                    return { ...item, checked: !item.checked }
                }
                return item
            })

            return updatedList
        }

        case TYPES.DELETED: {
            const option = confirm(
                'Este artículo será eliminado. ¿Quieres continuar?'
            )

            if (!option) return list

            deleteData(action.id)
            const updatedList = list.filter((item) => item.id !== action.id)

            return updatedList
        }
    }
}

const initialFormText = {
    formTitle: 'Agregar artículo',
    buttonText: 'Agregar',
}

const useInitialState = () => {
    const [open, setOpen] = useState(false)
    const [formText, setFormText] = useState(initialFormText)

    const editOpenForm = () => {
        setOpen(true)
        setFormText({
            formTitle: 'Actualizar artículo',
            buttonText: 'Actualizar',
        })
    }
    const handleClickOpen = () => {
        setOpen(true)
        setFormText(initialFormText)
    }
    const handleClose = () => setOpen(false)

    const [list, dispatch] = useReducer(listReducer, initialList)

    const sortList = (startIndex, endIndex) =>
        dispatch({ type: TYPES.SORTED, startIndex, endIndex })

    const addItem = (form) => dispatch({ type: TYPES.ADDED, form })

    const updateItem = (form) => dispatch({ type: TYPES.UPDATED, form })

    const updateChecked = (id) => dispatch({ type: TYPES.CHANGED_CHECK, id })

    const deleteItem = (id) => dispatch({ type: TYPES.DELETED, id })

    const refForm = useRef()

    return {
        list,
        sortList,
        addItem,
        updateItem,
        deleteItem,
        updateChecked,
        refForm,
        formText,
        editOpenForm,
        handleClickOpen,
        handleClose,
        open,
    }
}

export default useInitialState
