var express = require('express');
var router = express.Router();

const request = require('request');


router.get('/:instring', function(req,res,next) {
    let str = req.params.instring;
    let len = str.length;
    res.json('{"string:" + str, "length:" + len }');
});


router.post('/', function(req,res,next) {
    let str = req.body.string;
    let len = str.length;
    res.send('{"string:" + str, "length:" + len }');
});

module.exports = router;
