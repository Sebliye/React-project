import React from "react";
import "./PostProduct.css";
import Aux from "../../.././hoc/Auxilary";
import PropTypes from 'prop-types'

const productPost = (props) => {
  return (
    <Aux>
      <article className="Post" onClick={props.postClicked}>
        <div className="Author">
          <div>
            <div> Product Name:{props.name}</div>
            <div> Product Price: {props.price}</div>
            <div> Product Image:{props.imageUrl}</div>
            <div> Comments: {props.comments}</div>
          </div>
        </div>
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
