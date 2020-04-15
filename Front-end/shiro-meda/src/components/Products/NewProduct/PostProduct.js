import React from "react";
import "./PostProduct.css";
import Aux from "../../.././hoc/Auxilary";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const productPost = (props) => {
  return (
    <Aux>
      <article className="Post" style={{backgroundColor:'gainsboro'}}>
        <div className="Author">
          <div style={{color:'red'}}>
            <div> Product Name:{props.name}</div>
            <div> Product Price: {props.price}</div>
            <div> Product Image:{props.imageUrl}</div>
          </div>
          
        </div>
        <Link to={'/comment/'+props.pid}> comments </Link>
      </article>
    </Aux>
  );
};


productPost.propTypes = {
  postClicked: PropTypes.func,
  name:PropTypes.string,
  price:PropTypes.number,
  comments:PropTypes.string

};
export default productPost;
