var express = require('express');
var path = require('path');

var publicPath = path.join(__dirname, './../public')

var app = express();
app.use(express.static(publicPath));
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Server is running at port 3000');
})