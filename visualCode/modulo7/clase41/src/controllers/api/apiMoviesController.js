const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll({
            include: ['genre']
        })
            // esto reemplaza esta forma 
            
            .then(movies => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: movies.length,
                        url: 'localhost:3001/api/genres'
                    },
                    data: movies
                })
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id,
            {
                include : ['genre']
            })
            .then(movie => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: movie.length,
                        url: 'localhost:3001/api/genres'
                    },
                    data: movie
                })
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: movies.length,
                        url: 'localhost:3001/api/genres'
                    },
                    data: movies
                })
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            include: ['genre'],
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: movies.length,
                        url: 'localhost:3001/api/genres'
                    },
                    data: movies
                })
            });
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        let promGenres = Genres.findAll();
        let promActors = Actors.findAll();
        
        Promise
        .all([promGenres, promActors])
        .then(([allGenres, allActors]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesAdd'), {allGenres,allActors})})
        .catch(error => res.send(error))
    },
    create: function (req,res) {
        Movies
        .create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
        .then((movie)=> {
            return res.status(201).json({
                meta: {
                    status: 201,
                    total: movie.length,
                    url: 'localhost:3001/api/genres'
                },
                data: movie
                })
            })            
        .catch(error => res.send(error))
    },
    edit: function(req,res) {
        let movieId = req.params.id;
        let promMovies = Movies.findByPk(movieId,{include: ['genre','actors']});
        let promGenres = Genres.findAll();
        let promActors = Actors.findAll();
        Promise
        .all([promMovies, promGenres, promActors])
        .then(([Movie, allGenres, allActors]) => {
            Movie.release_date = moment(Movie.release_date).format('L');
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesEdit'), {Movie,allGenres,allActors})})
        .catch(error => res.send(error))
    },
    update: function (req,res) {
        let movieId = req.params.id;
        Movies
        .update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            },
            {
                where: {id: movieId}
            })
        .then((movies)=> {
            return res.status(200).json({
                meta: {
                    status: 200,
                    total: movies.length,
                    url: 'localhost:3001/api/genres'
                },
                data: movies
                })
            })            
        .catch(error => res.send(error))
    },
    delete: function (req,res) {
        let movieId = req.params.id;
        Movies
        .findByPk(movieId)
        .then(Movie => {
            return res.status(200).json({
                meta: {
                    status: 200,
                    total: Movie.length,
                    url: 'localhost:3001/api/genres'
                },
                data: Movie
                })})
        .catch(error => res.send(error))
    },
    destroy: function (req,res) {
        let movieId = req.params.id;
        Movies
        .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.status(200).json({
                meta: {
                    status: 200,
                    total: movies.length,
                    url: 'localhost:3001/api/genres'
                },
                data: movies
                })})
        .catch(error => res.send(error)) 
    }
}

module.exports = moviesController;