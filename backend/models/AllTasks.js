import mongoose from "mongoose";    

const TasksSchema = new mongoose.Schema({
    name:String,
    active:String
});

const Tasks = mongoose.model('Tasks',TasksSchema);

export default Tasks;