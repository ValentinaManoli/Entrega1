var express = require('express');
var router = express.Router();
var cursoModel = require('../../models/cursoModel')

/* GET home page. */
router.get('/', async function(req, res, next) {

  var curso = await cursoModel.getCurso();

  res.render('admin/cursos', {
    layout: 'admin/layout',
    user: req.session.user,

    curso
    
  });
});

router.get('/eliminar/:id', async function(req, res, next) {

  var id = req.params.id;

  await cursoModel.delteCursosById(id);
  res.redirect('/admin/cursos');
});



router.get('agregar', (req, res, next)=> {
  res.render('admin/cursos/agregar', {
    layout: 'admin/layout'
  })
})

router.post('/agregar', async (req, res, next) => {
  try{
    if (req.body.curso != "" && req.body.unidad !="" && req.body.tarea !=""){
      await cursosModel.insertCurso(req.body);
      res.redirect('/admin/cursos')
    } else {
      res.render ('admin/agregar', {
        layout: 'admin/layout',
        error : true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch(error) {
    console.log (error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargó la nueva tarea'
    })
  }
})

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var curso = await cursosModel.getCursoById(id);

  res.render('admin/modificar', {
    layout: 'admin/layout', 
    curso
  })
})


router.post('/modificar', async (req, res, next) => {
  try{
    var obj = {
      curso: req.body.curso,
      unidad: req.body.unidad,
      tarea: req.body.tarea
    }
    console.log(obj)
    await cursosModel.modificarCursoById(obj, req.body.id);
    res.redirect('/admin/cursos')
  } catch(error) {
    console.log (error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modificó la tarea'
    })
  }
})

module.exports= router;