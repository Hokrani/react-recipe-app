const express= require('express');
const router=express.Router();
const request = require("request");

// @route       GET api/receipe
// @desc        Get all receipe data from the API
// @access      Public
router.get('/', ((req, res) => {
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+req.query.receipe;
    if(url){        
        req.headers['x-forwarded-proto']
        request.get(url, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                let json = JSON.parse(body);
                res.send(json);
            }
        });
    }
    
}))

module.exports=router;