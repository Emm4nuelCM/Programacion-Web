var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.use('/', (req, res, next) => {
  console.log('Request Url:' + req.url);
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/api', (req,res) => {
  res.json({ firstname: 'John', lastname: 'Doe' });
});
app.get('/person/:id', (req, res) => {
  res.render('person', { ID: req.params.id });
});
//NOT INCLUIDED IN PRACTICE  //NOT INCLUIDED IN PRACTICE  //NOT INCLUIDED IN PRACTICE
app.get('/tienda', (req, res) => {
  res.render('tienda');
})

app.listen(port);