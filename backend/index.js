import express from "express";
import cors from "cors";

import mongoose from "mongoose";

import AllTasks from './routes/AllTasks.js'

import ActiveTasks from './routes/ActiveTasks.js'

import CompleteTasks from './routes/CompleteTasks.js'

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// const items = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

mongoose
  .connect(
    "mongodb+srv://sushil22:Sushil2207@cluster0.cl63rgi.mongodb.net/TODO?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

// Basic route
app.use('/',AllTasks)
app.use('/active',ActiveTasks)
app.use('/completed',CompleteTasks)


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
