import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Aux from '../../hoc/Auxilary'
class Home extends Component{

   state = {
       product:null
   }
   
   componentDidMount(){

   }
   
   
   
   
    render(){
        localStorage.setItem("taken", '');
        return (
            <Aux>
                
                <h1> Well Come </h1>

                <div style={{backgroundColor:'yellow'}}>
                      assume here is product 11111 picture and some stuff <br></br>
                      <Link to='/comment' style={{color:'blue'}}> comments </Link>                      {/* we have to pass product id. we gonna updated */}
                </div>

                <div style={{backgroundColor:'orange'}}>
                       assume here is product 2222 picture and some stuff <br></br>
                      <Link to='/comment' style={{color:'blue'}}> comments </Link>
                </div>

            </Aux>
        );
    }
}

export default Home;