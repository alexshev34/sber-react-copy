import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './HeaderCustomer.module.css';

class HeaderCustomer extends Component {

    constructor(){
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    
    closeMenu() {
        this.setState({showMenu: false}, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render(){
    return(
        <header className={s.header}>
            <div className={s.header__container}>
                <div className={s.header__wrapper}>
                    <div className={s.logo}>YOUR<br /> <span>Services</span></div>
                    <nav className={s['site-navigation']}>
                        <ul className={s['site-navigation__list']}>
                            <li className={s['site-navigation__item']}>
                                <NavLink to="/message"  className={s['site-navigation__link']}>Сообщения</NavLink>
                            </li>
                            <li className={s['site-navigation__item']}>
                                <NavLink to="/my-orders" className={s['site-navigation__link']}>Мои заказы</NavLink>
                            </li>
                            <li className={s['site-navigation__item']}>
                                <a className={s['site-navigation__link']}>Разместить объявление</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={s['header-authorization']}>
                        <NavLink to="/logout" className={s.logout}>Выход</NavLink>
                        <button className={s['specialist-info']} onClick={this.showMenu}>Исполнитель: ИВАН ИВАНОВ</button>
                        {this.state.showMenu 
                            ?(
                                <ul>
                                    <li>Настройки</li>
                                    <li>Мой профиль</li>
                                    <li>История операций</li>
                                </ul>
                            )
                            :(
                                null
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    );
    }
}

export default HeaderCustomer;