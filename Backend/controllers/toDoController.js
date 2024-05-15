const TodoItem = require("../model/toDoItemModel");
const User = require("../model/usersModel");

class ToDoControllers {

    // Tested
    static async createTodo(req, res) {
        try {
            const uuid = req.user._id;
            const { description } = req.body;

            const result = await new TodoItem({
                description,
                userId: uuid,
                completed: false
            }).save();

            console.log(result);

            return res.json({
                success: true,
                message: 'Task Created Succesfully',
                taskId: result._id
            })

        } catch (error) {
            console.log(error);
            console.log('Something went Wrong @createToDo');

            res.status(501);
            return res.json({
                success: false,
                message: 'Server Error'
            })
        }
    }

    // Tested
    static async markTodoAsCompleted(req, res) {
        try {
            const { taskId } = req.body;

            const results = await TodoItem.findByIdAndUpdate(taskId, { completed: true });

            return res.json({ success: true, message: 'Updated Task Succesfully', description: results.description });

        } catch (error) {
            console.log(error);
            res.json({
                success: false,
                message: 'Something went wrong at server'
            })
        }
    }

    // Tested
    static async deleteTodo(req, res) {
        try {
            const { taskId } = req.body;

            if (!taskId)
                return res.status(400).json({ message: 'Missing task ID', success: false });

            const deletedTodo = await TodoItem.findByIdAndDelete(taskId);

            if (deletedTodo) {
                return res.json({ message: 'Task deleted successfully', success: true });
            } else {
                return res.status(404).json({ message: 'Task not found' });
            }

        } catch (error) {
            console.error(error); // Log the error for debugging
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    // Tested
    static async updateTaskDescription(req, res) {
        try {
            const { description, taskId } = req.body;

            const results = await TodoItem.findByIdAndUpdate(taskId, { description }, { new: true })
                .then(updatedDoc => {
                    console.log("Task updated successfully:", updatedDoc);
                })
                .catch(err => {
                    console.error("Error updating task:", err);
                });

            return res.json({ success: true, message: 'Updated Task Description Succesfully' });
        } catch (error) {
            console.log(error);
            res.json({
                success: false,
                message: 'Something went wrong at server'
            })
        }
    }

    //Tested
    static async getUsersTasks(req, res) {
        try {
            const userId = req.user._id;
            const userTasks = await TodoItem.find({ userId });
            console.log(userTasks);

            let completedTasks = [];
            let toDoTasks = [];

            userTasks.forEach(element => {
                if (element.completed) completedTasks.push({ description: element.description, taskId: element._id });
                else toDoTasks.push({ description: element.description, taskId: element._id });
            })
            const name = (await User.findById({ _id: userId })).name;

            return res.json({
                success: true,
                completedTasks,
                toDoTasks,
                name
            })

        } catch (error) {

            console.log(error);

            return res.json({
                message: 'Something Went wrong',
                success: false
            })
        }
    }
}

module.exports = ToDoControllers;