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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});

// Create TodoItem model
const TodoItem = mongoose.model('TodoItem', todoItemSchema);

module.exports = TodoItem;
