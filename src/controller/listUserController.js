const Connection = require('../database')

exports.findUser = (request, response) => {
    const { email, senha } = request.body

    if(!email || !senha) {
        return response.json({mensagem: "Preencha todos os campos"})
    }

    const sql = `SELECT * from users WHERE email = '${email}' AND senha = '${senha}'`

    Connection.query(sql, (error, result) => {
        if(error) {
            return response.json(error)
        }

        if(result.length > 0) {
            return response.json(result)
        }

        response.json({mensagem: "Usuário/senha inválido"})
    })
}