var express = require('express');
var router = express.router();

router get('/', function (req,res,next){
    res.send('hola soy nosotros')
})


module.exports = router;