const express = require('express')
const router = express.Router()
const request= require('request');

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cs411')
const db = mongoose.connection

const Schema = mongoose.Schema
const personSchema = new Schema({
    string: String,
    length: Number,
})

//const people = mongoose.model('people', personSchema)


router.get('/inputstring', function(req,res,next) {
    let str = req.params.input_string;
    let len = str.length;
    res.json({string:str, length:len});
});


router.post('/db', function(req,res,next) {
    let str = req.body.input_string;
    let len = str.length;
    res.send({string:str,length:len});
});

module.exports = router;
