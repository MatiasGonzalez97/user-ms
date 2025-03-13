const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId()
    },
    uid: String,
    name: String, 
    profilePic: String,
    email: {
        type: String,
        unique:true
    },
});

module.exports = mongoose.model('user', User);