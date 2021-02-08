const express=require('express');
const cors=require('cors');

const postRoute=require('./route/router.js');

const app=express();
app.use(cors());
app.use(express.json());

//mounting routs

app.use('/posts',postRoute);




const PORT=process.env.PORT||4000;
app.listen(PORT,()=>{
    console.log(`Post server is running on port ${PORT}`);
})


