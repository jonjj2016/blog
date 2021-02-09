const express=require('express');
const cors=require('cors');
const queryRoute=require('./route/query.route');
const {create,get}= require('./controllers/query.controllers')
const posts=require('./utils/util')

const app=express();
app.use(express.json());
app.use(cors());

//mounting routes
// app.use('/',queryRoute);
app.post('/events',create);
app.get('/posts',(req,res)=>{
    console.log("Requested to get posts");
    res.status(200).json({status:true,data:posts})
});



const PORT=process.env.PORT||7700;

app.listen(PORT,()=>{
    console.log(`Query server is running on port ${PORT}`);
})