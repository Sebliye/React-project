import React,{ Component } from 'react';
import { Route } from 'react-router';
import { Router, Switch, Redirect } from 'react-router-dom';

import Comments from '../container/comment/comment';
//import Home from '../container/home/TempHome';
import Home from '../container/home/Home';
import Signup from '../container/form/signup';
import LogIn from '../container/form/Login';
import Header from '../components/header/header';
import Aux from '../hoc/Auxilary';
import AddProduct from '../container/form/AddProduct';
import WriteComment from '../container/form/newcomment';

class RouterComponents extends Component{

    state = {
        auth:false
    }
    render(){
     
        return (
            <Aux>
                <Header></Header>
                <Switch>
                    <Route path='/' exact  component={Home}/>
                    <Route path='/comment/:pid' exact component={Comments}/>
                    <Route path='/sign-up' exact component={Signup}/>             
                    <Route path='/login' exact component={LogIn}/>
                    <Route path='/logout' exact  component={Signup}/>  
                    <Route path='/add-prd' exact component={AddProduct}/>
                    <Route path='/new-cmt/:pid' exact component={WriteComment}/>
                </Switch>
            </Aux>
        );
    }
}

export default RouterComponents;