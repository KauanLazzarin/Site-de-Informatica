const dataBase = require('sqlite-async')

function execute (data) {
    return data.exec(`
        CREATE TABLE IF NOT EXISTS client_data(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            logradouro TEXT,
            email TEXT, 
            telefone NUMBER,
            service TEXT
        );
    `)
}

module.exports = dataBase.open(__dirname + '/database.sqlite').then(execute)