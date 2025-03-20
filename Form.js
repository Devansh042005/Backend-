// form handling and working with the forms 
const express = require('express')
const app = express()

app.use(express.json()); // middleware h
app.use(express.urlencoded({extended: true})) // basically ye data reading ki techniques hai 

app.get('/profile' , function(req  ,res){ // here the function is the request handler which is a middleware and the '/' is the route
    res.send('champion uska coach')
});

app.get("/about", function(req , res){
    res.send("about page hai ye");
});
