const express = require('express')
const router = express.Router()
const User = require('./models/User')
const path = require('path');

router.post('/createuser', async ( req, res) => {
try{
 await  User.create({
    name: "shyam das",
    password: "123456",
    email:"ananddagar111@gmail.com",
    location:"AHEMEDABAD"
  })

  res.json({success:true})
}catch(error){
   console.log(error)
   res.json({success:false})
}
     

})
