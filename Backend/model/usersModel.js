const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: Boolean,
        default: function () {
            return this.email;
        } // might need to change
    },
    password: {
        type: String,
        required: true
    }
});

// Create TodoItem model
const User = mongoose.model('TodoItem', userModel);

module.exports = User;
