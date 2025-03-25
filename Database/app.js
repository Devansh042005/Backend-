const express = require('express');

const app = express();

const userModel = require('./userModel');

app.get('/', (req, res)=>{
    res.send("hey");
})

app.get('/create', async (req, res)=>{
    let createdUser = await userModel.create({
        name: "Harsh",
        email: "devansh@gmail.com",
        username: "harsh"
    }) // it is asynchronus

    res.send(createdUser);
})

app.listen(3000);