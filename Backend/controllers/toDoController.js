class ToDoControllers {

    static async markTodoAsCompleted(req, res) {
        console.log('recieved')
        return res.json({ 'access': true })
    }

    static async createTodo(req, res) {
        console.log('recieved')
        return res.json({ 'access': true })
    }

    static async deleteTodo(req, res) {
        console.log('recieved')
        return res.json({ 'access': true })
    }
}

module.exports = ToDoControllers;