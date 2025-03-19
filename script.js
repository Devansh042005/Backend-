// npm init se package.json create kra jo basically lekha jhokha hai of the project
const fs = require('fs'); // fs module import krli FS variable mei NODE se

// fs.writeFile("hey.text" , "hey hello kaise ho" , function(err){
//     if(err) throw err;
//     else console.log("done");
// })

// append means likhe hue  mei add krna
// unlink means file ko delete krna
//rndir means remove the folder

//  http aur https pre defined rules hai
// http ek protocol hai jisko follow kre bina aap internet pe naa ki kuch bhej skte ,naa hee khuch mnga skte

const server = http.createServer(function(req,res){

    res.end("hello world");
})
server.listen(3000);
