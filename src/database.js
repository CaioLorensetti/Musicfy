const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'Chinook',
    user: 'chinook.musicfy', //Standard authentication type only for Chinook DB
    password: 'musicfy_1234'
})

connection.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log(`MySql conectado com sucesso.`)
    }
})

module.exports = connection;