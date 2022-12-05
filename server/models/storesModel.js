const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storesModel = new Schema({
  quantity : {type:Number,required:true},
  name: {type:String,required:true},
})

module.exports = mongoose.model('stores',storesModel)