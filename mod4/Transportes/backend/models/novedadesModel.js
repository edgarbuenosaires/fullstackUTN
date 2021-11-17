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

module.exports = { getNovedades, insertNovedades }