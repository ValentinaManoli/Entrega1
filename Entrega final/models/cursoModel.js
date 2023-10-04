var pool = require('./bd')


async function getCurso(){
    
        var query = 'select * from cursos';
        var rows = await pool.query(query);
        return rows;

}

async function deleteCursoById(id){
        var query = 'delete from cursos where id = ?'
        var rows = await pool.query(query, [id]);
        return rows;
}


async function insertCurso(obj){
        try{
            var query= 'insert into cursos set ?'
            var rows = await pool.query(query, [obj]);
            return rows;
        } catch (error){
            console.log(error);
            throw error;
        }
    }

async function getCursoById(id){
    var query = 'select * from cursos where id = ?';
    var rows = await pool.query(query, [id]);

    return rows [0];
}

async function modificarCursoById(obj, id){
    try{
        var query = 'update cursos set ? where id=?';
    var rows = await pool.query(query, [obj, id]);

    return rows;
    } catch (error){
        throw error;
    }
    
}
    
    module.exports = {getCurso, deleteCursoById, insertCurso, getCursoById, modificarCursoById}

