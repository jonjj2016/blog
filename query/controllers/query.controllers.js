const posts=require('../utils/util')

const get=(req,res)=>{
    res.status(200).json({status:true,data:posts})
};


const create=(req,res)=>{
    const {type}=req.body;

    if(type=="PostCreated"){
        const {data}=req.body;
        posts[data.id]={...data,comments:[]}
        res.send({status:true,data:posts[data.id]})

    }else if(type=="CommentCreated"){
        // console.log(true);
        let {data,status}=req.body;
        data={...data,status};
        posts[data.postId]={...posts[data.postId],comments:[...posts[data.postId].comments,data]}
        res.send({status:true,data:posts[data.postId]})
    }
     else if(type=="ModerationCompleted"){
         const {data}=req.body;
       
        posts[data.postId].comments.map(item=>item.id==data.id&&(item.status=data.status));
        res.send({status:true})
        
    }

};

module.exports={
    create,
    get
}
