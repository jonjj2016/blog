const axios=require('axios');

const post=async(req,res)=>{
    console.log(req.body);
    const {type,data}=req.body
    try {
        if(type=="CommentCreated"){
            const status=data.content.includes('orange')?"rejected":"approved";
            await axios.post('http://localhost:4005/events',{
                type:"CommentModerated",
                data:{
                    id:data.id,
                    status,
                    content:data.content,
                    postId:data.postId
                },
                
            })
        }
        res.status(200).json({
            tsatus:true
        })     
    } catch (error) {
        
    }
};
module.exports={
    post
}