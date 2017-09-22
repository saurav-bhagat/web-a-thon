var express = require('express')
  , router = express.Router()

//
router.get('/brands', function(req, res) {
  // res.send('Audi, BMW, Mercedes')
  "use strict";
  let articles= [
    {
      id:1,
      title: 'Article one',
      author: 'Saurav',
      body : 'This is article one'
    },
    {
      id:2,
      title: 'Article two',
      author: 'Ankit',
      body : 'This is article two'
    }
  ];
  res.render('index.ejs',{title : 'Articles',articles: articles })
})

//


module.exports = router;
