const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    "Email": String,
    "Password":String,
    "Confirm_Password": String,
})

const userModel = mongoose.model("usermockdata", UserSchema)

module.exports = {
    userModel
}

