import express from 'express'

import Tasks from '../models/AllTasks.js'

const router = express.Router();

router.get('/',async(req,res) =>{ 

    const active = "Y"

    console.log(active)

    const tasks =  await Tasks.find({active})
    console.log(tasks)
    res.json(tasks);
})

export  default router;