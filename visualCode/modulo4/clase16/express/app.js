const express = require ('express')

const path = require('path')

const app = express()

app.listen(3000, () => {console.log("esto fue exitoso")
})

// app.get('/', function(req, res) {
//     res.send("bienvenidos al sitio")
// })

// app.get('/contacto', function(req, res)  {
//     res.send("dejanos tu contacto")
// })

// app.get('/unArray', function(req, res)  {
//     res.send([1, 2, 3, 4])
// })

// app.get('/unObjeto', function(req, res)  {
//     res.send({name : "dario"})
// })
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
})