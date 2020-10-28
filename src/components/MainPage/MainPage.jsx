import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "../Login/Login";
import RegCreateOrder from "../RegCreateOrder/RegCreateOrder";
import Registration from "../Registration/Registration";
import Main from "../Main/Main";

const MainPage = () => {
    return(
            <Switch>
                <Route path="/create-order" render={() => <RegCreateOrder/> } />
                <Route exact path="/" render={() => <Main/>}/>
                <Route exact path="/login" render={() => <Login/>}/>
                <Route path="/registration" render={() => <Registration/>}/>
            </Switch>

    )
}

export default MainPage;