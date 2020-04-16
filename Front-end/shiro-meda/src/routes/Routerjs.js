import React,{ Component } from 'react';
import { Route } from 'react-router';
import { Router, Switch, Redirect } from 'react-router-dom';
import Home from '../container/home/Home';
import Signup from '../container/form/signup';
import LogIn from '../container/form/Login';
import Header from '../components/header/header';
import Aux from '../hoc/Auxilary';
import AddProduct from '../container/form/AddProduct';
import WriteComment from '../container/form/newcomment';
import AsyncComponent from '../hoc/asyncComponent';
const AsyncHome=AsyncComponent(()=>{
    return import('../container/home/Home');
 });
 const AsyncComment=AsyncComponent(()=>{
    return import('../container/comment/comment');
 });
class RouterComponents extends Component{
    state = {
        auth:false,
        redirect:false
    }
    render(){
        return (
            <Aux>
                <Header></Header>
                <Switch>
                    <Route path='/' exact  component={AsyncHome}/>
                    <Route path='/comment/:pid' exact component={AsyncComment}/>
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