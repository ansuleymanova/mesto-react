import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard({});
  }

    function handleEditAvatarClick() {
      setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
      setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
      setIsAddPlacePopupOpen(true);
    }

    return (
    <div className="App">
      <div className="page">
          <Header />
          <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
          <Footer />
        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <label htmlFor="name"></label>
          <input type="text" name="name" className="popup__field popup__field_type_name" id="name" required
                 minLength="2" maxLength="40" placeholder="Ваше имя" />
          <span className="name-error"></span>
          <label htmlFor="bio"></label>
          <input type="text" name="bio" className="popup__field popup__field_type_bio" id="bio" required minLength="2"
                 maxLength="200" placeholder="Расскажите о себе" />
          <span className="bio-error"></span>
        </PopupWithForm>
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <label htmlFor="picture-link"></label>
          <input type="url" name="avatar" className="popup__field popup__field_type_avatar" id="avatar"
                 placeholder="Ссылка на картинку" required />
          <span className="avatar-error"></span>
        </PopupWithForm>
        <PopupWithForm name="card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <label htmlFor="title"></label>
          <input type="text" name="title" className="popup__field popup__field_type_title" id="title"
                 placeholder="Название" required minLength="2" maxLength="30" />
          <span className="title-error"></span>
          <label htmlFor="picture-link"></label>
          <input type="url" name="link" className="popup__field popup__field_type_picture-link" id="picture-link"
                 placeholder="Ссылка на картинку" required />
          <span className="picture-link-error"></span>
        </PopupWithForm>
        <PopupWithForm name="confirm" title="Вы уверены?" isOpen={isConfirmPopupOpen} onClose={closeAllPopups}></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      </div>
    </div>
  );
}

export default App;
