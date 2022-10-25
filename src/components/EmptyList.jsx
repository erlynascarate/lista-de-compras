import '@styles/EmptyList.css'

const EmptyList = () => {
    return (
        <div className='empty-list'>
            <h2 className='empty-list__title'>¡Esta lista está vacía!</h2>
            <p className='empty-list__text'>
                Agrega un artículo a la lista pulsando el botón de abajo
            </p>
        </div>
    )
}

export default EmptyList
