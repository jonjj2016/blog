exports.handleEvent=(type,data)=>{
    if(type=="PostCreated"){
        posts[data.id]={...data,comments:[]}
        res.send({status:true,data:posts[data.id]})

    }else if(type=="CommentCreated"){
        let {status}=data;
        data={...data,status};
        posts[data.postId]={...posts[data.postId],comments:[...posts[data.postId].comments,data]}
        res.send({status:true,data:posts[data.postId]})
    }
     else if(type=="ModerationCompleted"){
        posts[data.postId].comments.map(item=>item.id==data.id&&(item.status=data.status));
        res.send({status:true})
        
    }
}