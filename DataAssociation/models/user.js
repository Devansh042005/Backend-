const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/testingthedatabase");
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId, // post is the array of ID's
            ref: 'post' // above Id's belongs to the post model
        }
    ]
})

module.exports = mongoose.model('user' , userSchema);