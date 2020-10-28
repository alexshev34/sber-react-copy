import React from 'react';
import './Header.css';
import '../../css/main.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return(
        <header className="header">
		<div className="container__header">
			<div className="header__wrapper">
				<div className="header-logo">
					<NavLink to="/">YOUR<br/><span>Services</span></NavLink>
				</div>
				<div className="header__burger">
					<span></span>
				</div>
				<nav className="header-navigation">
					<ul className="header-navigation__list">
						<li className="header-navigation__item">
							<NavLink to="/create-order" className="header-navigation__link">Создать заказ</NavLink>
						</li>
						<li className="header-navigation__item">
							<a href="#" className="header-navigation__link">Все заказы</a>
							</li>
						<li className="header-navigation__item">
							<NavLink to="/registration" className="header-navigation__link">Стать исполнителем</NavLink>
						</li>
					</ul>
				</nav>
				<div className="header-authorization">
					<NavLink to="/login" className="sign-in">Вход</NavLink>
					<NavLink to="/registration" className="sign-up">Регистрация</NavLink>
				</div>
			</div>
		</div>
	</header>
    );
}

export default Header;