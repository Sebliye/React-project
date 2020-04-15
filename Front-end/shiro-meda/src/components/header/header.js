import React from 'react';
import Radium from 'radium';
import './header.css'
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Auxilary';
//import styled from 'styled-components';
class Header extends React.Component{
     state = {
          token: localStorage.getItem("taken"),
          
     }
render(){
const ShiromedaStyle={
     color:'red',
     fontSize:'xx-large',
     top:0
}
const signupstype={
     marginLeft:"50em",
}
    
    let links = null;
    if(this.state.token.length<=1){
         links = (
              <Aux>
                    <li style={signupstype}><Link to='/sign-up'>signup</Link></li>
                    <li><Link to="/login">Log In</Link></li>
              </Aux>
         )
    }else{
     links = (
          <Aux>
               <li><Link to='/logout'>Log Out</Link></li>
               <li><Link to='/add-prd'>Add Product</Link></li>
          </Aux>
     )
    }
      return(
       <header>
        <ul className="nav">
          <li style={ShiromedaStyle}><Link to="/home"><strong style={{backgroundColor:'red',color:'white'}}>SHIRO MEDA</strong></Link></li>
          {links}
          
        </ul>
      </header>
    
     )
}    
}
export default Radium(Header);



{/* <section>
          <ProductList id={this.state.clickedPostId} />
        </section>
        <section>
          <NewProduct />
        </section> */}