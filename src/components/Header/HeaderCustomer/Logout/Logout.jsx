import React from 'react';
import s from './Logout.module.css';

const Logout = () => {
    return(
    <section className={s.form}>
		<form action="#" className={s.form__authorization}>
			<button className={s.form__login}>Войти как заказчик</button>
			<button className={s.form__logout}>Выход</button>
		</form>
	</section>
    );
}

export default Logout;