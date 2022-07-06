const express = require('express');
const router = express.Router();
const request = require("request");

// @route       GET api/menu
// @desc        Get all sub-category data from the API
// @access      Public
router.get('/', (req, res) => {
    // res.send(req.query.category);
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${req.query.category}`;
    if (url) {        
        req.headers['x-forwarded-proto']
        request.get(url, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                let json = JSON.parse(body);
                res.send(json);
            }
        });
    }
})

module.exports = router; 