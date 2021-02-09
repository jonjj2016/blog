const express=require('express');
const cors=require('cors');
const {eventListener} =require('./controller/controller')

const postRoute=require('./route/router.js');

const app=express();
app.use(cors());
app.use(express.json());

//mounting routs

app.use('/posts',postRoute);

app.post('/events',eventListener)


const PORT=process.env.PORT||4000;
app.listen(PORT,()=>{
    console.log(`Post server is running on port ${PORT}`);
})


