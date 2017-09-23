const express     =   require('express');
const path        =   require('path');
const mongoose    =   require('mongoose');
const bodyParser  =   require('body-parser')


//connect databasemongodb://localhost/nodekb
// mongoose.connect('mongodb://16BIT0104:^Saurav123#@ds139480.mlab.com:39480/mess-at-hand');
// var db = mongoose.connection;

//check connection
// db.once('open', function() {
//   console.log("connected to mongodb");
// });

//check for db errprs
// db.on('error',function(err){
//   console.log(err);
// });
//init app
const app = express();

//bring inmodels
const Article = require('./models/article');
var car = require('./routes/car');



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

app.get('/franchise', function(req, res) {
  res.render('franchiseform.ejs');
});

app.get('/franpage', function(req, res) {
  res.render('franchise.ejs');
});

app.get('/cart', (req, res) => {
  res.render('cart1.ejs');
})

app.get('/userform', function(req, res) {
  res.render('userform1.ejs');
});
app.get('/users', function(req, res) {
  res.render('users.ejs');
});

app.get('/administrator', function(req, res) {
  res.render('administrator.ejs');
});

app.get('/admin', function(req, res) {
  res.render('admin1.ejs');
});


app.get('/administratorform', function(req, res) {
  res.render('administratorform.ejs');
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
