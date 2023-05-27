const mongoose=require('mongoose');

const Gallery=mongoose.Schema({
  imageUrl:"String",

})

module.exports=mongoose.model("photos",Gallery);