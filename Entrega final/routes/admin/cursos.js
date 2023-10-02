var express = require('express');
var router = express.Router();
var cursoModel = require('../../models/cursoModel')

/* GET home page. */
router.get('/', async function(req, res, next) {

  var curso = await cursoModel.getCurso();

  res.render('admin/cursos', {
    layout: 'admin/layout',
    user: req.session.user

    cursos
    
  });
});


module.exports= router;