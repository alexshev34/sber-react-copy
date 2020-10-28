import React from 'react';
import s from './Dashboard.module.css';

const Dashboard = () => {
    return(
        <>
            <section className={s.settings}>
                <p className={s.settings__title}>Специальные настройки профиля, обязательные только для исполнителя</p>
                <p className={s.settings__text}>Для того чтобы отображаться в списке как исполнитель и выполнять заказы, заполните специальные поля в форме ниже</p>
            </section>
            <section className={s.form}>
                <div className={s.form__container}>
                    <form action="#">
                        <div className={s.form__wrapper}>
                            <p className={s['form__you-services']}>Ваши услуги:</p>
                            <input className={s.form__file} type="file" id="file"/>
                            <label className={s.form__label} for="file">Добавить услугу</label>
                            <p className={s['form__about-me']}>Обо мне:</p>
                            <textarea name="" id="" className={s.form__description} placeholder="Краткий рассказ о Ваших навыках и услугах, расценках:"></textarea>
                            <p className={s.form__education}>Информация об образовании:</p>
                        </div>
                        <div className={s.form__box}>
                                <select className={s.form__select} name="" id="">
                                    <option value="" selected>Бакалавр</option>
                                </select>
                                <input className={s.form__input} type="text" placeholder="Учебное заведение:"/>
                                <input className={s.form__input} type="text" placeholder="Специальность"/>
                                <input className={s.form__input} type="date" placeholder="Год окончания"/>
                        </div>
                        <input className={s.form__file} type="file" id="file-2"/>
                        <label className={s.form__label, s.form__label2} for="file-2">Добавить диплом</label>
                        <button className={s.form__button}>Сохранить изменения</button>
                    </form>	
                </div>
            </section>
            <section className={s.edit}>
                <button className={s.edit__button}>Редактировать общие настройки профиля</button>
                <button className={s.edit__remove}>Удалить меня, как исполнителя</button>
            </section>
        </>
    );
}

export default Dashboard;