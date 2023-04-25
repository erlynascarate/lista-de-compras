import '@styles/AddToTheList.css'
import QuantityFieldSet from '@components/QuantityFieldSet'

const AddToTheList = ({
    state: { nav, list, title, buttonText },
    addItem,
    updateItem,
    deleteItem,
    changeText,
    refs: { refContainer, refForm, refInput, refDeleteItem },
}) => {
    const show = (event) => {
        const pressedContainerOrShowButton =
            event.target === refContainer.current ||
            event.target.closest('.add-to-the-list-show')

        if (pressedContainerOrShowButton) {
            const shown = refContainer.current.classList.toggle(
                'container-add-to-the-list--show'
            )

            if (shown === true) {
                const theHeightIsEnough = innerHeight > 700
                if (theHeightIsEnough === true) {
                    refInput.current.focus()
                }
                changeText('Agregar nuevo', 'Agregar')
            } else {
                refInput.current.blur()
                if (nav === 'edit-list') {
                    refForm.current.reset()
                    refDeleteItem.current.classList.remove(
                        'add-to-the-list__delele-item--show'
                    )
                }
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const itemExists = list.some((item) => item.id === form.id.value)

        itemExists === true ? updateItem(form) : addItem(form)

        form.reset()
        refContainer.current.classList.remove('container-add-to-the-list--show')
        if (nav === 'edit-list') {
            refDeleteItem.current.classList.remove(
                'add-to-the-list__delele-item--show'
            )
        }
    }

    return (
        <section
            className='container-add-to-the-list'
            ref={refContainer}
            onClick={show}
        >
            <form
                className='add-to-the-list'
                autoComplete='off'
                onSubmit={handleSubmit}
                ref={refForm}
            >
                <button className='add-to-the-list-show' type='button'>
                    <svg
                        className='add-to-the-list-show__icon'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 512'
                    >
                        {/* ! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                        <path d='M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z' />
                    </svg>
                </button>
                <input
                    className='add-to-the-list__id'
                    type='text'
                    name='id'
                    defaultValue={new Date().toLocaleString()}
                />
                <h2 className='add-to-the-list__title'>
                    <label htmlFor='add-new-item'>{title} artículo</label>
                </h2>
                <input
                    id='add-new-item'
                    className='add-to-the-list__input'
                    type='text'
                    name='name'
                    placeholder='Nombre del Artículo'
                    minLength={3}
                    maxLength={28}
                    required
                    ref={refInput}
                />
                <QuantityFieldSet />
                <input
                    className='add-to-the-list__btn'
                    type='submit'
                    value={buttonText}
                />
                <button
                    className='add-to-the-list__delele-item'
                    type='button'
                    onClick={() =>
                        deleteItem(refForm, refContainer, refDeleteItem)
                    }
                    ref={refDeleteItem}
                    title='Eliminar artículo'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 512'
                    >
                        {/*! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                        <path d='M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z' />
                    </svg>
                </button>
            </form>
        </section>
    )
}

export default AddToTheList
