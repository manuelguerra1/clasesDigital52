const fs = require("fs");
const path = require("path");

let logMiddleware =  ( req, res, next ) =>{
    let mensaje = `el usuario ingresó a la ruta ${req.url}\n`
    fs.appendFileSync
    (path.join(__dirname, '../../logs/userLogs.txt'),mensaje)
    next();
}

module.exports = logMiddleware;