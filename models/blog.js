const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title : String,
  subTitle : String,
  description : String,
  ratings : Number,
});

const blog = mongoose.model('Blog', blogSchema);

module.exports = blog;