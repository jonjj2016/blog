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
        let {data,status}=req.body;
        data={...data,status};
        posts[data.postId]={...posts[data.postId],comments:[...posts[data.postId].comments,data]}
        res.send({status:true,data:posts[data.postId]})
    }
};

module.exports={
    create,
    get
}
