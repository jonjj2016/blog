const express=require('express');
const cors=require('cors');

const postRoute=require('./route/router.js');
const {posts}=require('./utils/util')

const app=express();
app.use(cors());
app.use(express.json());

//mounting routs
// app.get('/posts/:productKey',(req,res)=>{
//    console.log(req.params);
//     res.status(200).json({
//         status:true,
//         items:Object.keys(posts).length,
//         data:posts
//     });
// })
app.use('/posts/:productKey',postRoute);




const PORT=process.env.PORT||4000;
app.listen(PORT,()=>{
    console.log(`Post server is running on port ${PORT}`);
})


