const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    "Email": String,
    "Password":String,
    "Confirm_Password": String,
})

const Usermodel = mongoose.model("usermockdata", UserSchema)

module.exports = {
    Usermodel
}

