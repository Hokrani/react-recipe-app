const express= require('express');
const router=express.Router();

// @route       GET api/menu
// @desc        Test route
// @access      Public
router.get('/',(req,res)=>res.send('Menu Route'))

module.exports=router;