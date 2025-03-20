// express.js ---> EK NPM package hai , It is a framework
// framework gives u flow but u have things available 
// express js manages everything from receiving the request and giving the response

const express = require('express')
const app = express() // express ki poori powers app mei h

// routes create krna

app.get('/' , function(req  ,res){ // here the function is the request handler which is a middleware and the '/' is the route
    res.send('Hello World')
});

app.get('/profile' , function(req  ,res){ // here the function is the request handler which is a middleware and the '/' is the route
    res.send('champion uska coach')
}); 

app.get('/about', function(req, res){
    res.send('Web3 X AI')
})

app.listen(3000)