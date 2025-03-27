const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.get("/" , function(req, res) {
    bcrypt.genSalt(10 , function(err,salt){
        bcrypt.hash("pololololololo", salt, function(err,hash){
            console.log(hash); // $2b$10$mBbuTb/xIVBuKfH.pcufTe
        }) // bcrypt for the encryption
    })
    res.send("done");
})

app.get("/read" , function(req, res) {
    bcrypt.compare("pololololololo" , "$2b$10$mBbuTb/xIVBuKfH.pcufTe" , function(err,result){
        console.log(result);
    })
    res.send("done"); // bcrypt for the decryption
})

app.get("/read", function(req,res){
    res.send("read page");
})

app.listen(3000);