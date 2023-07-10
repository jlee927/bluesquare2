var express = require('express');
var app = express();

app.use('/website', express.static(__dirname + '/public'))
console.log(__dirname)

app.use('/images', express.static(__dirname + '/public/images/testPhoto.png'))

app.use('/json', express.static(__dirname + '/package.json'))

app.use('/websiteJSON', express.static(__dirname + '/public/package.json'))

app.use(function(req, res)  {   //defaul parameter
    res.status(404);
    res.send('<h1>Error 404: Resource not found</h1>')
})

app.listen(9000, function(req, res) {
    console.log('Running');
})
