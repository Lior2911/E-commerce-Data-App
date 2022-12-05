const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OrderModel = new Schema({
  orderNumber:{type:String , required:true},
  name:{type:String , required:true},
  address:{type:String , required:true},
  deliveryDate:{type:Date , required:true},
  numOfItem:{type:Number , required:true},
  sum:{type:Number , required:true},
})

module.exports = mongoose.model("orders",OrderModel)