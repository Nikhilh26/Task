const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: function () {
            return this.email;
        } // might need to change
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create TodoItem model
const User = mongoose.model("users", userModel);

module.exports = User;
