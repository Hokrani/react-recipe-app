const express= require('express');
const router=express.Router();

// @route       GET api/submenu
// @desc        Test route
// @access      Public
router.get('/',(req,res)=>res.send('Sub Menu Route'))

module.exports=router;