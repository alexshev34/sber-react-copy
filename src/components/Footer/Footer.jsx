import React from 'react';
import './Footer.css';
import '../../css/main.css';

const Footer = () => {
    return(
            <footer className="footer">
                <div className="container__footer">
                    <div className="footer__wrapper">
                        <div className="footer__column">
                            <div className="footer__logo">YOUR<br/> <span>Services</span></div>
                            <div className="footer__copyright">&copy; 2020 YOUR Services. Все права защищены</div>
                        </div>
                        <ul className="footer__column">
                            <li className="footer__item">
                                <a href="#" className="footer__link">Политика конфиденциальности</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Пользовательское соглашение</a>
                            </li>
                        </ul>
                        <div className="footer__column">
                            <div>
                                <a href="#" className="footer__button">Написать нам</a>
                            </div>
                            <a href="#" className="footer__mail">info@your-services.ru</a>
                        </div>
                    </div>
                </div>
            </footer>
    );
}

export default Footer;