var pool = require('./bd')


async function getCurso(){
    
        var query = 'select * from cursos';
        var rows = await pool.query ();
        return rows;

}


module.exports = {getCurso}