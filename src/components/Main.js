import React from 'react';
import { api } from '../utils/api';
import Card from './Card.js';

export default function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    function initialRender() {
        Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([userInfo, cards]) => {
            setUserName(userInfo.name);
            setUserAvatar(userInfo.avatar);
            setUserDescription(userInfo.about);
            setCards(cards);
        }).catch((err) => {console.log(err)})
    }

    React.useEffect(() => {
        initialRender();
    }, []);

    return (
        <main className="main">
            <section className="profile-area">
                <div className="profile-area__profile">
                    <div className="profile-area__overlay" onClick={props.onEditAvatar}></div>
                    <img className="profile-area__avatar" alt="Аватар пользователя"
                         style={{ backgroundImage: `url(${userAvatar})`, backgroundSize: "contain" }}/>
                    <div className="profile-area__profile-info">
                        <div className="profile-area__heading-edit">
                            <h1 className="profile-area__heading">{userName}</h1>
                            <button type="button" className="profile-area__edit-button"
                                    aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile-area__subheading">{userDescription}</p>
                    </div>
                </div>
                <button type="button" className="profile-area__add-button" aria-label="Добавить пост" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {cards.map((card) => (
                    <Card card={card} key={card._id} onCardClick={props.onCardClick}></Card>
                ))
                }
            </section>

        </main>
    )
}