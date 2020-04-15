


import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Auxilary'

class Header extends React.Component{
  state = {
    token: localStorage.getItem("taken"),
    
}
render(){

  let links = null;
  if(this.state.token.length<=1){
       links = (
            <Aux>
                  <li><Link to='/sign-up' className="nav-link">signup</Link></li>
                  <li><Link to="/login" className="nav-link">Log In</Link></li>
            </Aux>
       )
  }else{
   links = (
        <Aux>
             <li><Link to='/logout' className="nav-link">Log Out</Link></li>
             <li><Link to='/add' className="nav-link">Add</Link></li>
        </Aux>
   )
  }

      return(
<Aux>
<div className="nav">
  <ul>
    <li><a href="#" className="nav-link">Home</a></li>
    {links}
  </ul>
</div>     
</Aux>
     )
}    
}
export default Header;