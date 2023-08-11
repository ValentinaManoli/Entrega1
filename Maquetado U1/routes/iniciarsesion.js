var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next){
    res.send ('Iniciar sesion')
})


module.exports = router;