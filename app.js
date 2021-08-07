const mysql = require('mysql')
const express = require('express')

const app = express()

app.use(express.json())
app.use(express.static('./public'))

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodewithdb'
})

app.get('/', (req,res) => {
  let sql = 'SELECT * FROM movielist'
  let query = db.query(sql,(err,result) => {
    if (err) throw err
    res.json({genre: result})
  })
  res.json({id:1, title: 'Slice Of Life'})
})

/*db.connect((err) => {
  if(err) throw err;
  console.log('Database connected');
})*/

app.listen(3000,() => {
  console.log('listening on port 3000...');
})
