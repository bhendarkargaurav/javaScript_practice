
const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', function(req, res){
    res.send('hellow World');
})

app.post('/home', function(req, res){
    res.send('welcome to home');
})

app.patch('/home', function(req, res){
    res.send('this is a patch request');
})

app.listen(PORT, function process(){
    console.log('Server Started');

})




