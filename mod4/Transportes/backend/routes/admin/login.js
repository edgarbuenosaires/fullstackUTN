var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});
// Logout
router.get('/logout', function (req, res, next) {
    req.session.destroy(); // destruir las varaibles de sesion (id y usario)
    res.render('admin/login', {
        layout: 'admin/layout'
    });
}) // cierro logout

// Login
router.post('/', async (req, res, next) => {
    try {
        var usuario = req.body.usuario; //flavia
        var password = req.body.password; //1234

        //se puede utilizar un console log para ver si trae los datos
        console.log(req.body);

        var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

        if (data != undefined) {
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;