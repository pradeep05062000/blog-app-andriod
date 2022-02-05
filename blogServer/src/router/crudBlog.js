const express = require('express');

const BlogModel = require('../model/blogModel') 

const router = new express.Router();

router.get('/blogposts',async (req,res) => {
    try{
        const allBlogs = await BlogModel.find({});
        res.send(allBlogs);
    }catch(e){
        res.status(500).send()
    }
    
});

router.post('/blogposts',async (req,res) => {
    try{
        const blog = await BlogModel(req.body);
        await blog.save();
        res.send();
    }catch(e){
        res.status(500).send()
    }
    
});

router.put('/blogposts/:id',async (req,res) => {
    try{
        const blog = await BlogModel.findByIdAndUpdate(req.params.id,req.body)
        await blog.save();
        res.send();
    }catch(e){
        res.status(500).send()
    }
    
});

router.delete('/blogposts/:id',async (req,res) => {
    try{
        const blog = await BlogModel.findByIdAndDelete({ _id: req.params.id });
        res.send();
    }catch(e){
        res.status(500).send()
    }
    
});


module.exports = router;