import React from 'react';
import s from './Registration.module.css';
import '../../css/main.css';

const Registration = () => {
    return(
        <>
            <section className={s.registration}>
                <div className={s.registration__container}>
                    <h2 className={s.registration__title}>Быстрая регистрация</h2>
                    <ul className={s.registration__list}>
                        <li className={s.registration__item}>
                            <a className={s.registration__link} href="#">ВКонтакте</a>
                        </li>
                        <li className={s.registration__item}>
                            <a className={s.registration__link} href="#">Facebook</a>
                        </li>
                        <li className={s.registration__item}>
                            <a className={s.registration__link, s.registration__od} href="#">Одноклассники</a>
                        </li>
                        <li className={s.registration__item}>
                            <a className={s.registration__link} href="#">Google</a>
                        </li>
                    </ul>
                </div>
	        </section>
            <section className={s.mail}>
                <div className={s.mail__container}>
                    <h2 className={s.mail__title}>Регистрация через почту</h2>
                    <form action="#" className={s.mail__form}>
                        <input className={s.mail__input} type="text" placeholder="Имя"/>
                        <input className={s.mail__input} type="text" placeholder="Фамилия"/>
                        <input className={s.mail__input} type="text" placeholder="e-mail"/>
                        <input className={s.mail__input} type="text" placeholder="Телефон"/>
                        <input className={s.mail__input} type="text" placeholder="Страна:"/>
                        <input className={s.mail__input} type="text" placeholder="Город:"/>
                        <input className={s.mail__input} type="text" placeholder="Пароль:"/>
                        <input className={s.mail__input} type="text" placeholder="Повторить пароль:"/>
                        <div>
                            <input className={s.mail__check} type="checkbox"/>
                            <label>Получать уведомления о заказах на электронную почту</label>
                        </div>
                        <button className={s.mail__button} type="submit">Зарегистрироваться</button>
                    </form>
                    <p className={s.mail__info}>Нажимая кнопку «Зарегистрироваться», я соглашаюсь с правилами сайта<br/> и даю согласие на обработку персональных данных</p>
                </div>
            </section>   
        </>
    );
}

export default Registration;

