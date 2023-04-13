// const db = require('../database/models')
// const Movie = db.Movie

const {Movie} = require('../database/models')


module.exports = {
    list : (req, res) => {
        Movie.findAll()
        .then(movies => {
            // return res.send(peliculas)
            res.render('moviesList', {movies})
        })
        
        // ESTA LINEA REEMPLAZA A LA DEL list:(req,res) 
        // list : async(req, res) => {}

        // ESTA LINEA REEMPLAZA A LA DEL Movie.findAll(), AL .then() Y ATRAPA AL ERROR 
        // try {
        // const movies = await Movie.findAll()
        // res.render('moviesList', {movies})
        // } catch (error) {
        //     res.send(error)
        // }
    },
    detail : (req, res) => {
        let id = req.params.id
        Movie.findByPk(id)
        .then(movie => {
            res.render('moviesDetail', {movie})
        })
    }
}