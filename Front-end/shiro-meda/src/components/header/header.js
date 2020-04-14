import React from 'react';
import Radium from 'radium';
import './header.css'
import { Link } from 'react-router-dom';
//import styled from 'styled-components';
class Header extends React.Component{
render(){
const ShiromedaStyle={
     color:'red',
     fontSize:'xx-large',
     top:0
}
const signupstype={
     marginLeft:"50em",
}
      return(
       <header>
        <ul className="nav">
          <li style={ShiromedaStyle}><Link to="/home"><strong style={{backgroundColor:'red',color:'white'}}>SHIRO MEDA</strong></Link></li>
          <li style={signupstype}><Link to='/sign-up'>signup</Link></li>
          <li><Link to="/sign-in">SignIn</Link></li>
          <li><Link href='/add'>Add</Link></li>
        </ul>
      </header>
    
     )
}    
}
export default Radium(Header);