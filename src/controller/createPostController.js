const Connection = require('../database')

exports.save = (request, response) => {
    const { autor, post, data } = request.body

    if(!autor || !post || !data) {
        return response.json({mensagem: "Preencha todos os campos"})
    }

    const sql = `INSERT INTO post (autor, post, data) VALUES ('${autor}', '${post}', '${data}')`
    
    Connection.query(sql, (error, result) => {
        if(error){
            return response.json(error)
        }

        if(result.affectedRows > 0){
            return response.json({mensagem: "Post criado!"})
        }
    })
}
