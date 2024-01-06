const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const catSchema = require('../models/catigories.js')

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

// async function func(){
//     var cat = await create({
//       name:"automobiles",
//       types:["voitures","car"],
//       carc:[{type:"pegeot", refs:['206',"205","106"]}],
//       options:["aaa","bbbb","ccccc"],


//     })
//     var cat = await create( {
//         name:"immobliers",
//         types:["vila","aprtement","dublex"],
//         carc:[],
//         options:["bathroom","bedRoom","kkkkk"],
  
  
//       })

// }
// func()
console.log("declarer super cat")
router.get('/', async (req, res) => {
  
   var cat= await catSchema.create( req.body)
   res.send(cat)
    
});
router.put('/:id', async (req, res) => {
    try{
        var  cat = await catSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
        res.send({message:true})
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});
router.delete('/:id', async (req, res) => {
    try{
        const catDelete = await catSchema.deleteOne({ _id: req.params.id }).then(async (group) => {
            var cats = await   catSchema.find();
            res.send(cats)
          })
        
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});


module.exports = router;