const {commentsByPostId}=require('../utils/util');
const {randomBytes}=require('crypto');
const axios=require('axios');


exports.get=(req,res)=>{
    const comments=commentsByPostId[req.params.postId]||[];

    res.status(200).json({
        status:true,
        data:comments
    })
};
// POST route to post comments
// public
// posts/:postId/comm
exports.create=async(req,res)=>{
    const id=randomBytes(4).toString('hex');
    const {content}=req.body;
    const comments=commentsByPostId[req.params.postId]||[]
    comments.push({
        id,content,status:"pending",postId:req.params.postId
    })
    commentsByPostId[req.params.postId]=comments;
    //emmiting event to our event bus
    await axios.post('http://localhost:4005/events',{
            type:"CommentCreated",
            data:{id,content,postId:req.params.postId, status:"pending"},
           
        })

    res.status(201).json({
        status:true,
        data:comments,
    });
}
exports.eventListener=async(req,res)=>{
    const {type,data}=req.body;
    if(type=="CommentModerated"){
        // console.log(commentsByPostId[data.postId]);
        commentsByPostId[data.postId].map(com=>com.id==data.id&&(com.status=data.status));
        const comment=commentsByPostId[data.postId].find(item=>item.id==data.id);
        await axios.post("http://localhost:4005/events",{
            type:"ModerationCompleted",
            data:comment
        });
    }
    res.send({status:"ok"})
}