import React from 'react';
import s from './MessageCustomer.module.css';

const MessageCustomer = () => {
    return(
        <section className={s.message}>
            <div className={s.message__container}>
                <h2 className={s.message__title}>Мои сообщения</h2>
                <div className={s.message__box}>
                    <div className={s.message__photo}>
                        <img src="https://s8.hostingkartinok.com/uploads/images/2020/10/2cd770e2091fd5ddc28fe77fcf3954b5.png" alt=""/>
                        <div className={s.message__online}>онлайн</div>
                    </div>
                    <div className={s.message__info}>
                        <p className={s.message__name}>Имя Фамилия</p>
                        <p className={s.message__text}>Текст последнего сообщения</p>
                    </div>
                    <div className={s.message__letter}>
                        <img src="https://s8.hostingkartinok.com/uploads/images/2020/10/a95f884c21117abe96dd438cc07a0f71.png" alt=""/>
                    </div>
                    <div className={s.message__col}>
                        <p className={s.message__all}>Всего сообщений: <span>7</span></p>
                        <p className={s.message__last}>Последнее: <span>21:30 21.09.2020</span></p>
                    </div>
                </div>
                <div className={s.message__box}>
                    <div className={s.message__photo}>
                        <img src="https://s8.hostingkartinok.com/uploads/images/2020/10/2cd770e2091fd5ddc28fe77fcf3954b5.png" alt=""/>
                        <div className={s.message__online}>не в сети</div>
                    </div>
                    <div className={s.message__info}>
                        <p className={s.message__name}>Имя Фамилия</p>
                        <p className={s.message__text}>Текст последнего сообщения</p>
                    </div>
                    <div className={s.message__letter}>
                        <img src="https://s8.hostingkartinok.com/uploads/images/2020/10/a95f884c21117abe96dd438cc07a0f71.png" alt=""/>
                    </div>
                    <div className={s.message__col}>
                        <p className={s.message__all}>Всего сообщений: <span>7</span></p>
                        <p className={s.message__last}>Последнее: <span>21:30 21.09.2020</span></p>
                    </div>
                </div>
                <div className={s.message__box}>
                    <div className={s.message__photo}>
                        <img src="https://s8.hostingkartinok.com/uploads/images/2020/10/2cd770e2091fd5ddc28fe77fcf3954b5.png" alt=""/>
                        <div className={s.message__online}>онлайн</div>
                    </div>
                    <div className={s.message__info}>
                        <p className={s.message__name}>Имя Фамилия</p>
                        <p className={s.message__text}>Текст последнего сообщения</p>
                    </div>
                    <div className={s.message__letter}>
                        <img src="https://s8.hostingkartinok.com/uploads/images/2020/10/a95f884c21117abe96dd438cc07a0f71.png" alt=""/>
                    </div>
                    <div className={s.message__col}>
                        <p className={s.message__all}>Всего сообщений: <span>7</span></p>
                        <p className={s.message__last}>Последнее: <span>21:30 21.09.2020</span></p>
                    </div>
                </div>
                <div className={s.message__box}>
                    <div className={s.message__photo}>
                        <img src="https://s8.hostingkartinok.com/uploads/images/2020/10/2cd770e2091fd5ddc28fe77fcf3954b5.png" alt=""/>
                        <div className={s.message__online}>не в сети</div>
                    </div>
                    <div className={s.message__info}>
                        <p className={s.message__name}>Имя Фамилия</p>
                        <p className={s.message__text}>Текст последнего сообщения</p>
                    </div>
                    <div className={s.message__letter}>
                        <img src="https://s8.hostingkartinok.com/uploads/images/2020/10/a95f884c21117abe96dd438cc07a0f71.png" alt=""/>
                    </div>
                    <div className={s.message__col}>
                        <p className={s.message__all}>Всего сообщений: <span>7</span></p>
                        <p className={s.message__last}>Последнее: <span>21:30 21.09.2020</span></p>
                    </div>
                </div>
            </div>
	    </section>
    );
}

export default MessageCustomer;