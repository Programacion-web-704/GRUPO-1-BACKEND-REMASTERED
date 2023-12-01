const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');

const users = require('./api/users')

const libros = require('./api/libros')

const app = express()
const port = 3080

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

app.use('/api/users',users)
app.use('/api/libros',libros)


app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});




