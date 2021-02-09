const {posts} =require('../utils/util');
const {randomBytes}=require('crypto');
const axios=require('axios');

const get=(req,res)=>{
    res.status(200).json({
        status:true,
        items:Object.keys(posts).length,
        data:posts
    });
};
const post=async(req,res)=>{
    try {
        
        const id=await randomBytes(4).toString('hex');
        const {title}=req.body;
        posts[id]={
            id,title
        };
        await axios.post('http://localhost:4005/events',{
            type:"PostCreated",
            data:{id,title}
        })
        res.status(201).json({
            status:true,
            data:posts[id]
        })
    } catch (error) {
        
    }
};

const eventListener=(req,res)=>{
    console.log("Event Received",req.body.type);
    res.send({status:"ok"})

}
module.exports={
    get,post,eventListener
}
