const path = require("path");
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
 res.render(path.join(__dirname + '/index.html'));
});

app.get('/test', function(req, res){
    res.send('dit is een nieuwe pagina');
   });
   
app.listen(3000);


console.log("server is running");


