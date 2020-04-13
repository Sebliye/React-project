const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    data: String,

    createdAt : {type: Date, default: Date.now}
 
  });
  // Sets the created_at parameter equal to the current time
  commentSchema.pre('save',next=>{
      let time = new Date();
      if(!this.createdAt){
          this.createdAt = time;
      }
      next();
  });
  
  /**exporting product schema */
  module.exports = mongoose.model("Comment", commentSchema);