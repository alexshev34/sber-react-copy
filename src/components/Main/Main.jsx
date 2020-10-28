import React from 'react';
import './Main.css';
import '../../css/main.css';
import { NavLink } from 'react-router-dom';



const Main = () => {
	return (
		<React.Fragment>
			<section className="preview">
				<div className="container">
					<div className="preview__wrapper">
						<div className="preview__column">
							<h1 className="preview__title">Найдем <span>исполнителя</span> для решения Вашей задачи!</h1>
							<p className="preview__text">Быстрый сервис по поиску специалистов в любой жизненной ситуацмм</p>
							<div className="preview__inner">
								<div className="preview__button">
									<NavLink to="/create-order" className="preview__link1">Разместить заказ</NavLink>
								</div>
								<div className="preview__button">
									<NavLink to="/registration" className="preview__link2">Стать исполнителем</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="popular">
				<div className="container">
					<h2 className="popular__title">Популярные услуги в <span>Сентябре</span></h2>
					<ul className="popular__list">
						<li className="popular__item">
							<img src="https://s8.hostingkartinok.com/uploads/images/2020/10/94be62ece2e156098097621aca4ed8dd.png" width="380" height="288" />
							<div className="popular__info">
								<p className="popular__text">Доставка до двери</p>
								<p className="popular__price">от 100 рублей</p>
							</div>
						</li>
						<li className="popular__item">
							<img src="https://s8.hostingkartinok.com/uploads/images/2020/10/a0c61682855d919e1889333d10c6da7d.jpg" width="380" height="288" />
							<div className="popular__info">
								<p className="popular__text">Проведение<br />мероприятий</p>
								<p className="popular__price popular-individual">от 5000 рублей</p>
							</div>
						</li>
						<li className="popular__item">
							<img src="https://s8.hostingkartinok.com/uploads/images/2020/10/c0d659e056bf833a4d44f1d16e1bb416.jpg" width="380" height="288" />
							<div className="popular__info">
								<p className="popular__text">Ремонт телефонов</p>
								<p className="popular__price">от 100 рублей</p>
							</div>
						</li>
					</ul>
					<div className="popular__button">
						<a className="popular__link" href="#">Заказать услугу</a>
					</div>
				</div>
			</section>

			<section className="work">
				<div className="container">
					<div className="work__wrapper">
						<div className="work-column">
							<ul className="work-list">
								<li className="work-list__item">
									<p className="work-list__number block-1">358</p>
									<p className="work-list__text">активных<br/>     заказов</p>
								</li>
									<li className="work-list__item">
										<p className="work-list__number">7698</p>
										<p className="work-list__text block-2">исполнителей</p>
									</li>
									<li className="work-list__item">
										<p className="work-list__number">4260</p>
										<p className="work-list__text">отзывов</p>
									</li>
							</ul>
						</div>
					</div>
				</div>
					<aside className="work-aside">
						<div className="work-aside__wrapper">
							<h2 className="work__title">Как работает <span>YOUR Services?</span></h2>
							<ul className="work-info">
								<li className="work-info__item">
									<p className="work-info__title">1. Создайте заказ</p>
									<p className="work-info__text">Расскажите, какая помощь вам требуется и сотни исполнителей увидят Ваше объявление.</p>
								</li>
								<li className="work-info__item">
									<p className="work-info__title">2. Получите отклики</p>
									<p className="work-info__text">Заинтересованные исполнители предложат вам свои услуги</p>
								</li>
								<li className="work-info__item">
									<p className="work-info__title">3. Наймите специалиста</p>
									<p className="work-info__text">Сравните профили, отзывы, стоимость, и выберите лучшее предложение</p>
								</li>
							</ul>
						</div>
					</aside>
			</section>
			<section className="advantage">
				<div className="container-3">
					<div className="advantage__wrapper">
						<div className="advantage__column">
							<h2 className="advantage__title">В чем же преимущество <span>Your Services</span> помимо удобного интерфейса и простой регистрации?</h2>
						</div>
						<div className="advantage__column">
							<ul className="advantage-list">
								<li className="advantage-list__item">
									<img className="advantage-list__img" src="https://s8.hostingkartinok.com/uploads/images/2020/10/4701668b5d3ae840554b67fbfb81bab9.png" height="73"/>
									<p className="advantage__text">Система безопасной сделки</p>
								</li>
								<li className="advantage-list__item">
									<img className="advantage-list__img" src="https://s8.hostingkartinok.com/uploads/images/2020/10/1b4f40be52ca9038d159314c3f88a6dc.png"/>
									<p className="advantage__text">Честная система рейтингов и отзывов</p>
								</li>
								<li className="advantage-list__item">
									<img className="advantage-list__img" src="https://s8.hostingkartinok.com/uploads/images/2020/10/b3abf6573d97de41cddc9a304fe3a45e.png"/>
									<p className="advantage__text">Арбитраж по спорным вопросам</p>
								</li>
								<li className="advantage-list__item">
									<img className="advantage-list__img" src="https://s8.hostingkartinok.com/uploads/images/2020/10/84028ce358c762acf41499e8475766c0.png"/>
									<p className="advantage__text">Нет комиссий и оплат за размещение заказа</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="job">
				<div className="container">
					<div className="job__wrapper">
						<p className="job__title">В вашем регионе работают 4 578 специалистов, еще 23 478 готовы помочь дистанционно</p>
						<div className="job__button">
							<a href="#" className="job__link">Полный список услуг</a>
						</div>
					</div>
				</div>
			</section>

			<section className="tasks">
				<div className="tasks__wrapper">
					<img className="tasks__back" src="https://s8.hostingkartinok.com/uploads/images/2020/10/abb22ef4404ee5e0602b109d719a0f51.png"/>
					<aside className="tasks__aside">
						<img className="tasks__front" src="https://s8.hostingkartinok.com/uploads/images/2020/10/2ec795b8a3998cbeedb9c4016a24297a.png"/>
					</aside>
					<div className="tasks__column">
						<h2 className="tasks__title">Последние размещенные <span>Задания:</span>
						</h2>
						<div className="tasks__block">
							<p className="tasks__text">Установка входной двери</p>
							<ul className="tasks__list">
								<li className="tasks__item">Срок до: <span>05.10.2020</span></li>
								<li className="tasks__item">Стоимость: <span>договорная</span></li>
							</ul>
							<a href="#" className="tasks__link">Стать исполнителем</a>
						</div>
						<div className="tasks__block">
							<p className="tasks__text">Установка входной двери</p>
							<ul className="tasks__list">
								<li className="tasks__item">Срок до: <span>05.10.2020</span></li>
								<li className="tasks__item">Стоимость: <span>договорная</span></li>
							</ul>
							<a href="#" className="tasks__link">Стать исполнителем</a>
						</div>
						<div className="tasks-button">
							<a href="#" className="tasks-button__link">Смотреть все задания</a>
						</div>
					</div>
				</div>
			</section>

			<section className="form">
				<div className="container__form">
					<div className="form__wrapper">
						<div className="form__block">
							<h3 className="form__title">Для заказчиков</h3>
							<p className="form__text form__center-1">Теперь вы знаете про YOUR Services. Выбор за вами. Разместите задание и проверьте, как всё работает.<br/> Это быстро и бесплатно.</p>
							<div className="form__button">
								<a href="#" className="form__link-1">Создать заказ</a>
							</div>
						</div>
						<div className="form__block">
							<h3 className="form__title">Для исполнителей</h3>
							<p className="form__text form__center-2">Вы предлагаете цены, а мы выплачиваем 100% вашего заработка. Никаких посредников. Оказывайте помощь клиентам и зарабатывайте!</p>
							<div className="form__button form-2">
								<a href="#" className="form__link-2">Стать<br/> исполнителем</a>
							</div>
						</div>
					</div>
				</div>
			</section>

	</React.Fragment>
    );
}

export default Main;