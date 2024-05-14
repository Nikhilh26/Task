const mongoose = require('mongoose');

const todoItemSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create TodoItem model
const TodoItem = mongoose.model('TodoItem', todoItemSchema);

module.exports = TodoItem;
