var express = require('express');
var router = express.Router();
const request= require('request');


router.get('/inputstring', function(req,res,next) {
    let str = req.params.input_string;
    let len = str.length;
    res.json({string:str, length:len});
});


router.post('/', function(req,res,next) {
    let str = req.body.input_string;
    let len = str.length;
    res.json({string:str,length:len});
});

module.exports = router;