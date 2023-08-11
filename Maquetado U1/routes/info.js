var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next){
    res.send ('Más info')
})


module.exports = router;