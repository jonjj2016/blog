const express=require('express');
const cors=require('cors');

const commentRoute=require('./route/router')

const app=express();
app.use(cors());
app.use(express.json());


//,ounting routes
app.use('/posts',commentRoute)

const PORT=process.env.PORT||5000;



app.listen(PORT,()=>{
    console.log(`Comments server is running on port ${PORT}`);
})