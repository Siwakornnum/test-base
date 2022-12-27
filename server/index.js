const express = require('express')
const app = express();
const mysql = require('mysql')
const cors = require('cors')
const connection = require('./database')


app.use(cors());
app.use(express.json());    



// const db = mysql.createConnection({
//     host: "ip-10-5-0-193",
//     user: "devtest",
//     password: "gZa5N646M13N@iyV",
//     database: "db_devjob",
//     port: '3306'
// })


app.get('/questions', (req, res ) => {
    // db.query("SELECT * FROM tbl_questions", (err, result) => {
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         res.send(result)
    //     }
    // })
})

app.listen('3001', function(){
    console.log('Server is running on port 3001')
    connection.connect(function(err){
        if(err) {
            console.log(err);
        }else {
            console.log('Database connected');

        }
    })
})