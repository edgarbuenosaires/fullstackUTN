var express = require('express');
var router = express.Router();
var mealsModel = require('./../models/mealsModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/meals', async function (req, res, next) {
    let meals = await mealsModel.getMeals();

    meals = meals.map(meals => {
        if (meals.img_id) {
            const imagen = cloudinary.url(meals.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...meals,
                imagen
            }
        } else {
            return {
                ...meals,
                imagen: ''
            }
        }
    });
    res.json(meals);
})

// Contacto

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'aguirre5411@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contacto a traves de la web y quiere mas informacion a este correo: ${req.body.email}<br> Ademas, hizo el siguiente comentario: ${req.body.mensaje}<br> Su telefono es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;