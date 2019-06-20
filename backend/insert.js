var Article = require('./article.model')
var mongoose = require('mongoose')

mongoose.connect('mongodb://haslotoadmin1:admin1@ds159546.mlab.com:59546/apka', { useNewUrlParser: true });
const connection = mongoose.connection;

var articlesCollection = connection.collection('apka')


function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
  }

  function insertArticle(artcileTitle, articleBody, artcileAuthor, articleDate){
      var article = new Article ({
          article_title: artcileTitle,
          article_body: articleBody,
          article_author: artcileAuthor,
          article_dateL: articleDate,
      }) 
      article.save((error)=>{
          if (error) throw error; 
          console.log('newArticle was added');
         })
  }
  var articleBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu ante imperdiet, laoreet sapien id, facilisis eros. Aliquam pretium eleifend tortor vitae molestie. Sed id fringilla nunc, id pretium velit. Vivamus eu felis non elit cursus consequat. Nunc in tempor leo. Mauris eu placerat sem. Fusce ultricies turpis id felis feugiat blandit. Quisque est nulla, aliquam et augue ut, tempor fringilla leo.'
  for(var i=1;i<=10;i++){
      insertArticle(`Article Title ${i}`, articleBody,`Author ${i}`, randomDate(2,30,2,12))
  }