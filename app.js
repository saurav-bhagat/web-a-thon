const express     =   require('express');
const path        =   require('path');
const mongoose    =   require('mongoose');
const bodyParser  =   require('body-parser')


//connect database
mongoose.connect('mongodb://localhost/nodekb');
var db = mongoose.connection;

//check connection
db.once('open', function() {
  console.log("connected to mongodb");
});

//check for db errprs
db.on('error',function(err){
  console.log(err);
});
//init app
const app = express();

//bring inmodels
const Article = require('./models/article');
var car = require('./routes/car');

app.use('/users', car);

//set view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));



//home route
app.get('/', (req, res) => {
  "use strict";
  Article.find({}, function(err, articles){
    if(err){
      console.log(err);
    }else{
      res.render('index.ejs');
    }

  });

});
app.get('/index2', function(req, res) {
  res.render('index2.ejs');
});


app.get('/articles/add', (req, res) => {
  res.render('add_article', {
    title:'Add article'
  });
});

// Add submit post request..
app.post('/articles/add', (req, res) => {
  "use strict";
  let article = new Article();
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;

  article.save(function(err){
    if(err){
      console.log(err);
      return;
    }else{
        res.redirect('/');
    }
  });
});

//start server
app.listen(3003, () => {
  console.log("server started at port 3003");
});
