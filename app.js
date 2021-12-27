const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'))// middleware para usar el nodemon

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))// routes
})


app.listen(port, () => {
    console.log(`Puerto corriendo en ${port}\n http://localhost:${port}`)
  })
  