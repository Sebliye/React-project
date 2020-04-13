const Product = require('../models/model.product');
const Comment = require('../models/model.comment');

exports.getAllProducts = (req, res, next) => {
    Product.find().then((data)=> res.json(data) )  
  };

  exports.getProduct = (req, res, next) => {  
    Product.findById(req.params.productId).then((data) => res.json(data));
  };

  exports.postProduct = (req, res, next) => {
      new Product(req.body).save().then(r=>res.json(r));
  };

  exports.postComment = (req, res, next) => {
    new Comment(req.body).save().then(r=>res.json(r));
   }
  exports.getAllComments = (req, res, next) => {
    Comment.find().then((data)=> res.json(data) )  
  };