import React,{ Component } from 'react';
import { Route } from 'react-router';
import { Router } from 'react-router-dom';
import Comments from '../container/comment/comment';
import Home from '../container/home/TempHome';

class RouterComponents extends Component{

    render(){
     
        return (
            <div>
                
                <Route path='/' exact strict component={Home}/>
                <Route path='/comment' exact strict component={Comments}/>

            </div>
        );
    }
}

export default RouterComponents;