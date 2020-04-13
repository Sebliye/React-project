const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,

    price: Number,
    
    image: String,

    comments: [
      { 
          userId: { type: Schema.Types.ObjectId, ref: "User" },
          rate: Number,
          userComments: [ { cid : { type: Schema.Types.ObjectId, ref: "Comment" } }  ]
      }
    ]
  
  
  });
  
  
  /**exporting product schema */
  module.exports = mongoose.model("Product", productSchema);