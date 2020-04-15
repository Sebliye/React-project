import React, { Component } from "react";
import axios from "axios";
import "./ProductList.css";

class ProductList extends Component {
  /** initializing a state  */
  state = {
    post: null,
  };


  /** update life cycle  we use this life cycle for updating*/
  componentDidUpdate = () => {
    if (this.props.id !== 0) {
        if(!this.state.post || (this.state.post.id !== this.props.id)){
            axios
            .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
            .then((response) => {
              this.setState({ post: response.data });
            });
        }
     
    }
  }



  render() {
    let post = <p>Welcome select a post!</p>;
    // if it is clicked show title and content
    if (this.props.id !== 0) {
      if (this.state.post) {
        post = (
          <div className="FullPost">
            <h1>{this.state.post.title}</h1>

            <div className="Edit">
              <button className="Delete">Delete</button>
            </div>
          </div>
        );
      }
    }

    return post;
  }
}

export default ProductList;
