var express = require('express');
var router = express.Router();
var mealsModel = require('../../models/mealsModel');

/* GET home page. */
router.get('/', async function (req, res, next) {

  var meals = await mealsModel.getMeals();

  res.render('admin/meals', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    meals
  });
});

// <<<<<<< AGREGAR MEALS >>>>>>>
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
})

router.post('/agregar', async (req, res, next) => {
  try {
    // var img_id = '';
    // if (req.files && Object.keys(req.files).length > 0) {
    //   imagen = req.files.imagen;
    //   img_id = (await uploader(imagen.tempFilePath)).public_id;
    // }

    if (req.body.plato != "" && req.body.preparacion != "" && req.body.cuerpo != "") {
      await mealsModel.insertMeals({
        ...req.body, //plato, preparacion y cuerpo
        //img_id
      });
      res.redirect('/admin/meals')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    });
  }
});

// Para eliminar

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  // let meal = await mealsModel.getMealsById(id);
  // if (meal.img_id) {
  //     await (destroy(meal.img_id));
  // }

  await mealsModel.deleteMealById(id);
  res.redirect('/admin/meals')
})

// Controlador para imprimir el formulario de modificacion

router.get('/modificar/:id', async (req, res, next) => {
  let id = req.params.id;
  console.log(req.params.id)
  let meal = await mealsModel.getMealById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    meal
  })
});

// Controlador que recibe los datos y los pasa a la funcion del model para modificarlos

router.post('/modificar', async (req, res, next) => {
  try {
    //let img_id = req.body.img_original;
    //let borrar_img_vieja = false;

    // if (req.body.img_delete === "1") {
    //   img_id = null;
    //   borrar_img_vieja = true;
    // } else {
    //   if (req.files && Object.keys(req.files).length > 0) {
    //     imagen = req.files.imagen;
    //     img_id = (await uploader(imagen.tempFilePath)).public_id;
    //     borrar_img_vieja = true;
    //   }
    // }
    // if (borrar_img_vieja && req.body.img_original) {
    //   await (destroy(req.body.img_original));
    // }

    let obj = {
      plato: req.body.plato,
      preparacion: req.body.preparacion,
      cuerpo: req.body.cuerpo
      //img_id
    }
    console.log(obj);
    await mealsModel.modificarMealById(obj, req.body.id);
    res.redirect('/admin/meals');
  }
  catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la novedad'
    })
  }
})


module.exports = router;
