const mysql = require('mysql');

const connectionDb = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
})

module.exports = connectionDb
