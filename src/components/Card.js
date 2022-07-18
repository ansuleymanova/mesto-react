export default function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="element" key={props.card._id}>
            <button type="button" className="element__delete-button" aria-label="Удалить"></button>
            <img className="element__picture" alt={`${props.card.name}`} onClick={handleClick} src={`${props.card.link}`} />
            <div className="element__info">
                <h3 className="element__heading">{props.card.name}</h3>
                <div className="element__like-area">
                    <button type="button" className="element__like-button" aria-label="Нравится"></button>
                    <p className="element__likes">{props.card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}