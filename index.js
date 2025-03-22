const express  =require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine','ejs');// using this we can render the ejs routes
app.use(express.static(path.join(__dirname ,'public')));


app.get("/", function(req, res){
    res.render("index");
})

app.get("/profile/:username",function(res,req){
    res.send( `welcome ,${req.params.username}`);
})

app.get("/author/:username/:age",function(res,req){
    res.send( `welcome ,${req.params.username}`);
})

app.listen(3000,function(){
    console.log("its running");
})