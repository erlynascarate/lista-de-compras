import { useState, useRef } from 'react'
import { updateData, deleteData, listData } from '../data/db'

const initialState = {
    list: listData,
    title: 'Agregar nuevo',
    buttonText: 'Agregar',
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const sortList = (startIndex, endIndex) => {
        const result = [...state.list]
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)

        const listIndex = result.map((item, index) => {
            if (item.index !== index) {
                updateData({ ...item, index })
            }
            return { ...item, index }
        })

        setState({
            ...state,
            list: listIndex,
        })
    }

    const addItem = (form) => {
        const { id, name, quantity, quantifier } = form

        const newItem = {
            id: id.value,
            name: name.value,
            quantity: quantity.value,
            quantifier: quantifier.value,
            checked: false,
        }

        const listIndex = [newItem, ...state.list].map((item, index) => {
            updateData({ ...item, index })
            return { ...item, index }
        })

        setState({
            ...state,
            list: listIndex,
        })
    }

    const updateItem = (form) => {
        const { id, name, quantity, quantifier } = form
        const editedItem = {
            id: id.value,
            name: name.value,
            quantity: quantity.value,
            quantifier: quantifier.value,
        }
        setState({
            ...state,
            list: state.list.map((item) => {
                if (item.id === id.value) {
                    updateData({ ...item, ...editedItem })
                    return { ...item, ...editedItem }
                }
                return item
            }),
        })
    }

    const deleteItem = (id) => {
        const option = confirm(
            'Este artículo será eliminado. ¿Quieres continuar?'
        )

        if (!option) return

        deleteData(id)
        const updatedList = state.list.filter((item) => item.id !== id)

        setState({
            ...state,
            list: updatedList,
        })
    }

    const updateChecked = (id) => {
        setState({
            ...state,
            list: state.list.map((item) => {
                if (item.id === id) {
                    updateData({ ...item, checked: !item.checked })
                    return { ...item, checked: !item.checked }
                }
                return item
            }),
        })
    }

    const changeText = (title, buttonText) => {
        setState({
            ...state,
            title,
            buttonText,
        })
    }

    const refContainer = useRef()
    const refForm = useRef()
    const refInput = useRef()
    const refDeleteItem = useRef()

    const refs = {
        refContainer,
        refForm,
        refInput,
        refDeleteItem,
    }

    return {
        state,
        sortList,
        addItem,
        updateItem,
        deleteItem,
        updateChecked,
        changeText,
        refs,
    }
}

export default useInitialState
