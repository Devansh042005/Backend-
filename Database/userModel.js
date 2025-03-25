const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/mongopractice`);
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
}) // user ko kya kya dena chahte ho

// creating model to perform CRUD operations
module.exports = mongoose.model("user" , userSchema);