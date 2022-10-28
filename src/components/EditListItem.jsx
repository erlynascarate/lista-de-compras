import { useEffect, useRef } from 'react'
import '@styles/EditListItem.css'
import { Draggable } from 'react-beautiful-dnd'

const EditListItem = ({
    index,
    item: { id, name, category, quantity, quantifier },
    state: { list, itemCategories },
    changeText,
    refs: { refContainer, refForm, refInput, refDeleteItem },
}) => {
    const { color } = itemCategories.find(item => item.id === category)
    const item = useRef()
    useEffect(() => {
        item.current.style.setProperty('--border-color', color)
    }, [list])

    const editItem = () => {
        refContainer.current.classList.add('container-add-to-the-list--show')

        refForm.current.id.value = id
        refForm.current.name.value = name
        refForm.current.category.value = category
        refForm.current.quantity.value = quantity
        refForm.current.quantifier.value = quantifier

        const theHeightIsEnough = innerHeight > 700
        if (theHeightIsEnough === true) {
            refInput.current.focus()
        }
        changeText('Actualizar', 'Actualizar')
        // updateQuantifiers();

        refDeleteItem.current.classList.add(
            'add-to-the-list__delele-item--show'
        )
    }

    return (
        <Draggable draggableId={id} index={index}>
            {provided => (
                <li {...provided.draggableProps} ref={provided.innerRef}>
                    <div className='edit-list-item'>
                        <button
                            {...provided.dragHandleProps}
                            className='edit-list-item__drag-btn'
                            ref={item}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 448 512'
                            >
                                {/*! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                <path d='M416 288C433.7 288 448 302.3 448 320C448 337.7 433.7 352 416 352H32C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288H416zM416 160C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H416z' />
                            </svg>
                        </button>
                        <div
                            className='edit-list-item-description'
                            onClick={editItem}
                        >
                            <span className='list-item__name'>{name}</span>
                            <span className='list-item__quantity'>
                                {quantity} {quantifier}
                            </span>
                            <button className='edit-list-item-description__edit-btn'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 512 512'
                                >
                                    {/*! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                                    <path d='M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z' />
                                </svg>
                            </button>
                        </div>
                    </div>
                </li>
            )}
        </Draggable>
    )
}

export default EditListItem
