// jab bhi server request accept krta hai waha se route ke beech pahuchne tak agr aap uss request ko beech mei rokte ho aur kuch perform krte ho, to ye element middleware kehlata hai
const express = require('express')
const app = express()

app.use(function(req, res ,next){
    console.log('middleware chala');
    next(); // request ko aage forward kro
}); // koi bi request se pehle isse chalao just like constructor

app.get('/profile' , function(req  ,res, next){ // here the function is the request handler which is a middleware and the '/' is the route
    return next(new Error("Something went wrong")) // ye wala console p aayega
});


// error handling the code hai 
app.use((err,req,res,next) =>{
    console.log(err.stack)
    res.status(500).send('Something broke!')
}) // sbse last m lgega

app.listen(3000) 