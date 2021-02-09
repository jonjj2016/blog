const posts=require('../utils/util')

const get=(req,res)=>{
    // console.log("Requested to get posts");
    res.status(200).json({status:true,data:posts})
};


const create=(req,res)=>{
    if(req.body.type=="PostCreated"){
        const {data}=req.body;
        posts[data.id]={...data,comments:[]}
        res.send({status:true,data:posts[data.id]})

    }else if(req.body.type=="CommentCreated"){
        const {data,postId}=req.body;
        posts[postId]={...posts[postId],comments:[...posts[postId].comments,data]}

        res.send({status:true,data:posts[postId]})
    }
    // console.log("Quer Server has received  :",req.body.type,"  event");
};

module.exports={
    create,
    get
}
