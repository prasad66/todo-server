const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    todo: String,
    isCompleted: Boolean
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
