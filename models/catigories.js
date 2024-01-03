const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  catSchema  = new mongoose.Schema({
   
   name:String,
   carc:[],
   type:[],
   options:[],
   icone:String
    
  });
module.exports=mongoose.model('catSchema',catSchema);