import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup(props) {
    const nameRef = useRef();
    const linkRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: nameRef.current.value,
            link: linkRef.current.value
        })
    }

    return (
        <PopupWithForm name="card" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} buttonText="Сохранить">
            <label htmlFor="title"></label>
            <input type="text" name="title" ref={nameRef} className="popup__field popup__field_type_title" id="title"
                   placeholder="Название" required minLength="2" maxLength="30" />
            <span className="title-error"></span>
            <label htmlFor="picture-link"></label>
            <input type="url" name="link" ref={linkRef} className="popup__field popup__field_type_picture-link" id="picture-link"
                   placeholder="Ссылка на картинку" required />
            <span className="picture-link-error"></span>
        </PopupWithForm>
    )
}