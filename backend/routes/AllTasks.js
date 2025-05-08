import express from 'express';


import Tasks from '../models/AllTasks.js';

const router = express.Router();


router.get('/',async(req,res) =>{
    const tasks= await Tasks.find();
    console.log(tasks)
    res.json(tasks)
});

router.post('/',async(req,res) => {
    const newTask = new Tasks(req.body)
    await newTask.save()
    res.status(201).json(newTask)
})


router.patch('/:id',async(req,res) =>{
    const updateTask = await Tasks.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    if(!updateTask){
        return res.status(404).send('Update failed')
    }
    res.json(updateTask)
})

export default router;