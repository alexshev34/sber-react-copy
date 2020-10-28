import React, {Component} from "react";
import './Login.css';
import '../../css/main.css';

import axios from 'axios';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''}, //зависит от валидации отдельного поля и активности кнопки для отправки формы
            emailValid: false, //зависит от валидации отдельного поля и активности кнопки для отправки формы
            passwordValid: false, //зависит от валидации отдельного поля и активности кнопки для отправки формы
            formValid: false //зависит от валидации отдельного поля и активности кнопки для отправки формы
        }
        this.handleSubmit.bind(this)
    }
    //отправка данных на сервер (вход)

    loginHandler = async () => {
        const authData = {
          email: this.state.email.value,
          password: this.state.password.value,
          returnSecureToken: true
        }
        try {
          const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQCTzLyySSydOAtMDbge0WXeIpqm0iJ-0', authData)
    
          console.log(response.data)
        } catch (e) {
          console.log(e)
        }
      }
    //отправка данных на сервер (регистрация)
    registerHandler = async () => {
        const authData = {
          email: this.state.email.value,
          password: this.state.password.value,
          returnSecureToken: true
        }
        try {
          const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQCTzLyySSydOAtMDbge0WXeIpqm0iJ-0', authData)
    
          console.log(response.data)
        } catch (e) {
          console.log(e)
        }
      }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
      }
    //праверка правильности E-mail и пароль на валидность
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }

      handleSubmit(event){
        alert("Имя: " + this.state.email);
        event.preventDefault();
      }
   
    render(){
        return(
            <>
                <section className="authorization">
                    <div className="authorization__container">
                        <h2 className="authorization__title">Быстрый вход</h2>
                        <ul className="authorization__list">
                            <li className="authorization__item">
                                <a className="authorization__link" href="#">ВКонтакте</a>
                            </li>
                            <li className="authorization__item">
                                <a className="authorization__link" href="#">Facebook</a>
                            </li>
                            <li className="authorization__item">
                                <a className="authorization__link authorization__od" href="#">Одноклассники</a>
                            </li>
                            <li className="authorization__item">
                                <a className="authorization__link" href="#">Google</a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="login">
                    <div className="login__container">
                        <p className="login__title">Войти:</p>
                        <form onSubmit={this.handleSubmit} className="login__form">
                            <input className="login__input" 
                                type="email"
                                name="email"  
                                placeholder="e-mail"
                                value={this.state.email}
                                onChange={this.handleUserInput} />
                            <input className="login__input" 
                                type="password" 
                                name="password"
                                placeholder="Пароль:"
                                value={this.state.password}
                                onChange={this.handleUserInput}/>
                            <div>
                                <input type="checkbox"/>
                                <label className="login__label">Запомнить меня</label>
                            </div>
                            <button className="login__button login__btn-1" 
                                type="submit" 
                                disabled={!this.state.formValid}
                                onClick={this.loginHandler}>Войти как заказчик</button>
                            <button className="login__button login__btn-2" type="submit" disabled={!this.state.formValid} onClick={this.registerHandler}>Войти как исполнитель</button>
                        </form>
                        <ul className="login__list">
                            <li className="login__item">
                                <a className="login__link" href="#">Восстановить пароль</a>
                            </li>
                            <li className="login__item">
                                <a className="login__link" href="#">Регистрация</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </>
        );
    }  
}

export default Login;