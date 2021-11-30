var express = require('express');
var router = express.Router();
var mealsModel = require('./../models/mealsModel');
var cloudinary = require('cloudinary').v2;

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
module.exports = router;