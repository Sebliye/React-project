import React from 'react';
import './footer.css'
import Aux from '../../hoc/Auxilary'

const Footer=(props)=>{

     return(
<Aux>
<footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <i>CODE WANTS TO BE SIMPLE </i> Lorem Ipsum is simply dummy text of the printing and typesetting industry
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <i>CODE WANTS TO BE SIMPLE </i> Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="/">Men's</a></li>
              <li><a href="/">Women's</a></li>
              <li><a href="/">Children</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text"> Copyright &copy; 2020 All Rights Reserved by 
         <a href="/"> Shiro-meda </a>.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
</Aux>      
     )
}
export default Footer;