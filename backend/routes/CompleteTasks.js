import express from 'express';

import Tasks from '../models/AllTasks.js';

const router = express.Router();

router.get('/',async(req,res) =>{
    const active ="N"

    const tasks = await Tasks.find({active})

    res.json(tasks)
})

export default router