const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'pererabotka'
});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors({
  origin:true,
  methods:['GET','POST', 'PATCH', 'DELETE'],
  credentials: true // enable set cookie
}));

app.get('/getOrganization', (req, res) => {
  pool.query('SELECT * FROM organization', function (error, results, fields){
    if (error) throw error;
    console.log('The solution is: ', results);
    res.send(results)
  })
})

app.get('/getRowMaterial', (req, res) => {
  pool.query('SELECT * FROM raw_material', function (error, results, fields){
    if (error) throw error;
    console.log('The solution is: ', results);
    res.send(results)
  })
})

app.get('/getData', (req, res) => {
  pool.query('SELECT * FROM user', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    res.send(results)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})