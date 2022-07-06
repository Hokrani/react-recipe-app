
const express = require('express');
const router = express.Router();
const request = require("request");

// @route       GET api/menu
// @desc        Get all category data from the API
// @access      Public
router.get('/', ((req, res) => {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    request.get(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            let json = JSON.parse(body);
            res.send(json);
        }
    });
}))

module.exports = router; 