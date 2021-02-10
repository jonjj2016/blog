const express=require('express');

const {post}=require('./controllers/controllers')

const app=express();
app.use(express.json());


app.post('/events',post)

const PORT=process.env.PORT||8800;

app.listen(PORT,()=>{
    console.log(`Moderation service is running on port ${PORT}`);
})

