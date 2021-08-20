Connection = require('../database')

exports.list = (request, response) => {

    response.json([
        {
            "autor": "Nath",
            "post": "post 1",
            "data": "2020-07-01"
        },
        {
            "autor": "Nath",
            "post": "post 2",
            "data": "2020-07-02"
        },
        {
            "autor": "Nath",
            "post": "post 3",
            "data": "2021-07-01"
        }
    ])
    // const sql = "SELECT autor, post, data FROM post";

    // Connection.query(sql, (error, result) => {
    //     if(error){
    //         return response.json(error)
    //     }

    //     response.json(result)
    // })
}
