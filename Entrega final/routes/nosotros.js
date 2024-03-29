var express = require('express');
var router = express.Router();

var nodemailer = require("nodemailer");

router.post('/', async(req, res, next) => {

  console.log(req.body)

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'valumanoli@gmail.com',
    subject: 'Contacto web',
    html: nombre + "se contacto a través del correo" + email +". Además hizo el siguiente comentario:" + mensaje + ". <br>Su número de teléfono es:" + tel
  }
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })
 var info = await transport.sendMail(obj);

  res.render('nosotros', {
    message: 'Enviado correctamente'
  })

})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nosotros', {
    isNosotros:true
  });
});

module.exports = router;
