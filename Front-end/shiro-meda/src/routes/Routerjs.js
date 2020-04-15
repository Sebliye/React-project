import React,{ Component } from 'react';
import { Route } from 'react-router';
import { Router, Switch, Redirect } from 'react-router-dom';
import Comments from '../container/comment/comment';
//import Home from '../container/home/TempHome';
import Home from '../container/Blog/Blog';
import Signup from '../components/signup/signup';
import LogIn from '../components/login/Login';
import Header from '../components/header/header';
import Aux from '../hoc/Auxilary';

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
                    <Route path='/comment' exact component={Comments}/>
                    <Route path='/sign-up' exact component={Signup}/>             
                    <Route path='/login' exact component={LogIn}/>
                    <Route path='/logout' exact  component={Home}/>
                </Switch>
            </Aux>
        );
    }
}

export default RouterComponents;