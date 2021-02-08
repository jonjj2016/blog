const {commentsByPostId}=require('../utils/util');
const {randomBytes}=require('crypto');


exports.get=(req,res)=>{
    const comments=commentsByPostId[req.params.postId]||[];
  
    res.status(200).json({
        status:true,
        data:comments
    })
};

exports.create=(req,res)=>{
    const id=randomBytes(4).toString('hex');
    const {content}=req.body;
    const comments=commentsByPostId[req.params.postId]||[]
    comments.push({
        id,content
    })
    commentsByPostId[req.params.postId]=comments;
    res.status(201).json({
        status:true,
        data:comments,
    });
}