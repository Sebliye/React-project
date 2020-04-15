import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import ListProduct from "../../components/Products/NewProduct/PostProduct";
import ProductList from "../../components/Products/ProductList/ProductList";
import NewProduct from "../../components/Products/NewProduct/NewProduct";
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

  // postClickHandler = (id) => {
  //   this.setState({ clickedPostId: id });
  // };

  render() {
    localStorage.setItem("taken", '');   
    const products = this.state.products.map((item) => {
      return (
        <Link to='/comment' key={item._id}>
        <ListProduct
          key={item._id}
          name={item.name}
          imageUrl={item.image}
          price={item.price}
        //  comments={item.comments}
          // postClicked={() => {
          //   this.postClickHandler(item.id);
          // }
          // }
        />
        </Link>
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
