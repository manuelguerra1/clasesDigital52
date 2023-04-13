const db = require('../database/models');
const sequelize = db.sequelize;
const dayjs = require('dayjs')

// const {Movie} = require('../database/models');

//Otra forma de llamar a los modelos
const Movies = db.Movie;

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
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
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        // TODO  
        res.render('moviesAdd') 
    },
    create: function (req, res) {
        // TODO
        // console.log(req.body);
        // return res.send('hola')
        const _body = {
            title: req.body.title,
            rating:req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            // image: file ? file.filename : avatar.jpg,
            // role: 1
        }
        db.Movie.create(_body)
        .then(() => {
            res.redirect('/movies')
        })
        .catch(error => res.send('error'))
    },
    edit: function(req, res) {
        // TODO
        db.Movie.findByPk(req.params.id)
        .then((Movie) => {
            // console.dir(Movie)
            res.render('moviesEdit', {Movie : {
                ...Movie.dataValues,
                release_date: dayjs(Movie.release_date).format('YYYY-MM-DD')
            }})
        })
        
    },
    update: function (req,res) {
        // TODO
        db.Movie.update({
            title: req.body.title,
            rating:req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            // image: file ? file.filename : avatar.jpg,
            // role: 1
        },{
            where : {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/movies')
        })
        .catch(error => res.send(error))
    },
    delete: function (req, res) {
        // TODO
    },
    destroy: function (req, res) {
        // TODO
    }

}

module.exports = moviesController;