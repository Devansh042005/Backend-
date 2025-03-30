const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/posts');

app.get('/', function(req,res){
    res.send("Chhetah hee kehde");
})

app.get("/create" , async function(req,res){
   let user = await userModel.create({
        username: "harsh",
        age: 25,
        email: "jandu@gmail.com"
    })
    res.send(user);
})

// 67e7c83c103e966176559db5
app.get("/post/create" , async function(req,res){
    let post = await postModel.create({
        postData: "BKL",
        user: "67e7c83c103e966176559db5"
     })
     //upr post bnane k baad neeche user ko post ki id dedi
     let user = await userModel.findOne({_id: "67e7c83c103e966176559db5"});
     user.posts.push(post._id);  
     await user.save();
    res.send({post,user});

 })

app.listen(3000);