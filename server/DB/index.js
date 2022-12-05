const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING,{
useNewUrlParser : true , 
useUnifiedTopology : true ,

})
.then(()=>{console.log("connection to mongoDb success");})
.catch((err)=>{console.log("connection failed",err.message);});

module.exports = mongoose.connection ; 