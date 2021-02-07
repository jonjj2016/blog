const {commentsByPostId}=require('../utils/util');
const {randomBytes}=require('crypto');


exports.get=(req,res)=>{
    const comments=commentsByPostId[req.params.id]||[];
  
    res.status(200).json({
        status:true,
        data:comments
    })
};

exports.create=(req,res)=>{
    const id=randomBytes(4).toString('hex');
    const {content}=req.body;
    const comments=commentsByPostId[req.params.id]||[]
    comments.push({
        id,content
    })
    commentsByPostId[req.params.id]=comments;
    res.status(201).json({
        status:true,
        data:comments,
    });
}