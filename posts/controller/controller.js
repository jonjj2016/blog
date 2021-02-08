const {posts} =require('../utils/util');
const {randomBytes}=require('crypto');

const get=(req,res)=>{
    console.log(req.params);
   
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
        }
        res.status(201).json({
            status:true,
            data:posts[id]
        })
    } catch (error) {
        
    }
};
module.exports={
    get,post
}
