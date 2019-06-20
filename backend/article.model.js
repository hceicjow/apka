const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Article = new Schema({
    article_title: {
        type: String
    },
    article_body: {
        type: String
    },
    article_author: {
        type: String
    },
    article_date: {
        type: Date
    }
});

module.exports = mongoose.model('Article', Article);