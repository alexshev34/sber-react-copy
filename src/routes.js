import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import MessageCustomer from './components/MessageCustomer/MessageCustomer';
import HeaderCustomer from './components/Header/HeaderCustomer/HeaderCustomer';
import SpecialistOrders from './components/SpecialistOrders/SpecialistOrders';
import Logout from './components/Header/HeaderCustomer/Logout/Logout';

const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return(
        <>
            <HeaderCustomer/>
            <Switch>
                <Route exact path="/" render={() => <Dashboard/>}/>
                <Route exact path="/message" render={() => <MessageCustomer/>}/>
                <Route exact path="/my-orders" render={() => <SpecialistOrders/>}/>
                <Route exact path ="/logout" render={() => <Logout/>}/>
            </Switch>
            <Footer/>
        </>
        )
    }
    return(
        <>
            <Header/>
            <MainPage/>
            <Footer/>
        </>
    )
}

export default useRoutes;