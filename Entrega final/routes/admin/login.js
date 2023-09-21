var express = require('express');
var router = express.Router();
var usuariosModel = require ('./../../models/usuariosModel')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

router.post('/', async (res,req,next)=>{
    try {
        var user = req.body.user;
        var password = req.body.password;
        console.log(req.body);

        var data = await usuariosModel.getUserByUsernameAndPassword(user, password);

        if (data != undefined){
            res.redirect('/admin/iniciarsesion')
        } else{
            res.render ('admin/login', {
                layout: 'admin/layout',
                error: true
            })
        }
    } catch (error){
        console.log(error);
    }
})


module.exports = router;
