var pool = require('./bd');

// Funcion traer Meals
async function getMeals() {
    var query = 'select * from meals order by id asc';
    var rows = await pool.query(query);
    return rows;
}

// Funcion agregar Meals
async function insertMeals(obj) {
    try {
        var query = 'insert into meals set ?';
        var rows = await pool.query(query, [obj])
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Funcion para eliminar novedades

async function deleteMealById(id) {
    var query = 'delete from meals where id = ? ';
    var rows = await pool.query(query, [id]);
    return rows;
}

// Funcion obtener noticia unica utilizando ID

async function getMealById(id) {
    var query = 'select * from meals where id = ? ';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

// Funcion para modificar campos de novedad seleccionada por ID

async function modificarMealById(obj, id) {
    try {
        var query = 'update meals set ? where id = ? ';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getMeals, insertMeals, deleteMealById, getMealById, modificarMealById }