const express = require('express')
const path = require('path')

const app = express()

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

app.listen(8080, () => {
    console.log('Esto funciono de manera perfecta!');
})

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})
