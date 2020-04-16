import React, { Component } from "react";
import axios from "axios";

import ListProduct from "../../components/Products/NewProduct/PostProduct";
import "./Blog.css";


class Blog extends Component {
  state = {
    products: [],
    clickedPostId: 0,
  };

  /** a creation life cycle hook we use this life cycle for creation / when we first fetch data */ 
  componentDidMount() {
    axios.get(`http://localhost:8081/prd`).then((response) => {
       //console.log(response);
      this.setState({ products: response.data});
    })
    .catch((error) => {
      console.log(error);
    });
  }


  render() {
    // localStorage.setItem("taken", '');   
    const products = this.state.products.map((item) => {
      return (
        
        <ListProduct
          key={item._id}
          name={item.name}
          imageUrl={item.image}
          price={item.price}
          pid={item._id}
        />
        
      );
    });

    return (

      <div>
        <section className="Posts">{products}</section>
        
      </div>
      
    );
  }
}

export default Blog;
