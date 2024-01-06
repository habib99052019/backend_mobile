const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const prodSchema = require('../models/products.js')
const userSchema = require('../models/user.js')

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
// async function func(){
//     var prod = await prodSchema.find()
//     console.log(prod)

// }
// func()
console.log("declarer super prod")
router.get('/', async (req, res) => {
  
    var prods= await prodSchema.find()
    res.send(prods)
     
 });
 router.get('/:id', async (req, res) => {
  
    var prod= await prodSchema.findById(req.params.id)
    res.send(prod)
     
 });
router.post('/add', async (req, res) => {
  
   var prod= await prodSchema.create( req.body)
   await userSchema.findByIdAndUpdate({ _id:req.body.userPosterId}, { $push: { products: prod._id } })
   res.send(prod)
    
});
router.put('/:id', async (req, res) => {
    try{
        var  prod = await prodSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
        res.send({message:true})
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});
router.delete('/:id', async (req, res) => {
    try{
        var prod= await prodSchema.findById(req.params.id)
        await userSchema.findByIdAndUpdate({ _id:prod.userPosterId}, { $pull: { products: prod._id } })

        const prodDelete = await prodSchema.deleteOne({ _id: req.params.id }).then(async (group) => {
            var prods = await   prodSchema.find();
            res.send(prods)
          })
        
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});


module.exports = router;