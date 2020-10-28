import React from 'react';

import './RegCreateOrder.css';
import '../../css/main.css';

const RegCreateOrder = () => {
    return(
        <>
            <section className="registration">
                <div className="registration__container">
                    <h2 className="registration__title">Быстрая регистрация</h2>
                    <ul className="registration__list">
                        <li className="registration__item">
                            <a className="registration__link" href="#">ВКонтакте</a>
                        </li>
                        <li className="registration__item">
                            <a className="registration__link" href="#">Facebook</a>
                        </li>
                        <li className="registration__item">
                            <a className="registration__link registration__od" href="#">Одноклассники</a>
                        </li>
                        <li className="registration__item">
                            <a className="registration__link" href="#">Google</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="mail">
                <div className="mail__container">
                    <h2 className="mail__title">Регистрация через почту</h2>
                    <form action="#" className="mail__form">
                        <div className="mail__flex">
                            <input className="mail__input" type="text" placeholder="Имя"/>
                            <input className="mail__input" type="text" placeholder="Фамилия"/>
                            <input className="mail__input" type="text" placeholder="e-mail"/>
                            <input className="mail__input" type="text" placeholder="Телефон"/>
                            <input className="mail__input" type="text" placeholder="Страна:"/>
                            <input className="mail__input" type="text" placeholder="Город:"/>
                            <input className="mail__input" type="text" placeholder="Пароль:"/>
                            <input className="mail__input" type="text" placeholder="Повторить пароль:"/>
                            <div>
                                <input className="mail__check" type="checkbox"/>
                                <label>Получать уведомления о заказах на электронную почту</label>
                            </div>
                        </div>
                        <div className="mail__flex-2">
                            <p className="mail__create">Создать новый заказ</p>
                            <select className="mail__choose" name="" id="">
                                <option>Выбор услуги</option>
                            </select>
                            <input className="mail__order" type="text" placeholder="Название заказа"/>
                            <textarea className="mail__description" name="" id="" placeholder="Описание заказа"></textarea>
                            <input className="mail__cost" type="text" placeholder="Стоимость заказа*"/>
                            <input className="mail__day" type="text" placeholder="Количество дней на исполнение:"/>
                            <button className="mail__button" type="submit">Зарегистрироваться и создать заказ</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default RegCreateOrder;
