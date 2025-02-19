const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://abhishekchoudhary162004:@cluster0.btusf.mongodb.net/mongopractice`);

const userSchema = mongoose.Schema({
    name : String,
    username: String,
    email: String
})


module.exports = mongoose.model("user", userSchema)