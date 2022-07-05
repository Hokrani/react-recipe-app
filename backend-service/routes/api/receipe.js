const express= require('express');
const router=express.Router();

// @route       GET api/receipe
// @desc        Test route
// @access      Public
router.get('/',(req,res)=>res.send('Receipe Route'))

module.exports=router;