const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const articleRoutes = express.Router();

let Article = require('./article.model');

app.use(cors());
app.use(bodyParser.json());

//laczenie z baza danych
mongoose.connect('mongodb://haslotoadmin1:admin1@ds159546.mlab.com:59546/apka', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//getroute
articleRoutes.route('/').get(function(req, res) {
    Article.find(function(err, articles) {
        if (err) {
            console.log(err);
        } else {
            res.json(articles);
        }
    });
});

//nastepnyendpoint?
articleRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Article.findById(id, function(err, article) {
        res.json(articles);
    });
});

//add
articleRoutes.route('/add').post(function(req, res) {
    let article = new Article(req.body);
    article.save()
        .then(article => {
            res.status(200).json({'article': 'article added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new article failed');
        });
//update      
});
articleRoutes.route('/update/:id').post(function(req, res) {
    Article.findById(req.params.id, function(err, article) {
        if (!article)
            res.status(404).send("data is not found");
        else
            article.article_description = req.body.article_description;
            article.article_responsible = req.body.article_responsible;
            article.article_priority = req.body.article_priority;
            article.article_completed = req.body.article_completed;

            article.save().then(article => {
                res.json('Article updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/article', articleRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});