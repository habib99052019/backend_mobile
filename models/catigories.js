const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  catSchema  = new mongoose.Schema({
   
   name:String,
   refs:[]
    
  });
module.exports=mongoose.model('catSchema',catSchema);