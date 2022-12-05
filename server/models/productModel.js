const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductModel = new Schema({
  quantity : {type:Number,required:true},
  name: {type:String,required:true},
})

module.exports = mongoose.model('product',ProductModel)