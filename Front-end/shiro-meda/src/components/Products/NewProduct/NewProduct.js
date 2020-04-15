import React, { Component } from "react";
import axios from "axios";
import "./NewProduct.css";
import PropTypes from 'prop-types'

class NewProduct extends Component {
  /** intitializing state  */
  state = {
    name: "",
    imageUrl: null,
    price: "",
    comments: "",
  };

  handleImageChange = (event) => {
    this.setState({
      imageUrl: event.target.files[0],
    });
  };

  postDataClickHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append("name", this.state.name);
    form_data.append("imageUrl", this.state.imageUrl, this.state.imageUrl.name);
    form_data.append("price", this.state.price);
    form_data.append("comments", this.state.comments);

    /** posting new product  */
    let url = `http://jsonplaceholder.typicode.com/posts/`;
    axios
      .post(url, { form_data })

      .then((response) => {
        console.log(response.data);

        this.setState({ products: response.data });
        console.log({ products: response.data });

        /** clearing an input value after form submit */
        this.setState({
          name: "",
          imageUrl: "",
          price: "",
          comments: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (

      <form className="">
        <div className="row">
          <div>
            <h2>Create Product</h2>
            <hr />
            <label>Product Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
          </div>

          <div>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              required
            />
          </div>

          <div>
            <label> Product Price</label>
            <input
              type="text"
              value={this.state.price}
              onChange={(event) => this.setState({ price: event.target.value })}
            />
          </div>

          <div>
            <label> Comments </label>
            <textarea
              type="text"
              value={this.state.comments}
              onChange={(event) =>
                this.setState({ comments: event.target.value })
              }
            />
          </div>

          <div>
            <button onClick={this.postDataClickHandler}> Add Product</button>
          </div>
        </div>
      </form>
    );
  }
}

NewProduct.propTypes = {
  click: PropTypes.func,
  name:PropTypes.string,
  price:PropTypes.number,
  comments:PropTypes.string

};

export default NewProduct;
