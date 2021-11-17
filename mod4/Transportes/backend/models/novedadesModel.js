var pool = require('./bd');

// Funcion traer novedades
async function getNovedades() {
    var query = 'select * from novedades order by id asc';
    var rows = await pool.query(query);
    return rows;
}

// Funcion agregar novedades
async function insertNovedades(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj])
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    } // cierra catch
}// cierra insert

// Funcion para eliminar novedades

async function deleteNovedadesById(id) {
    var query = "delete from novedades where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows;
}

// Funcion obtener noticia unica utilizando ID

async function getNovedadesById(id) {
    var query = "select * from novedades where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

// Funcion para modificar campos de novedad seleccionada por ID

async function modificarNovedadesById(obj, id) {
    try {
        var query = "update novedades set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getNovedades, insertNovedades, deleteNovedadesById, getNovedadesById, modificarNovedadesById }