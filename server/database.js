const mysql = require("mysql")


const connection = mysql.createConnection({
    host: "localhost",
    database: "db_devjob",
    user: "devtest",    
    password: "gZa5N646M13N@iyV",
    port: 3306
})

module.exports = connection