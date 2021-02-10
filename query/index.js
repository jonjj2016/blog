const express=require('express');
const cors=require('cors');
const {create,get}= require('./controllers/query.controllers');
const axios=require('axios');
const { handleEvent } = require('./utils/util');

const app=express();
app.use(express.json());
app.use(cors());

//mounting routes
// app.use('/',queryRoute);
app.post('/events',create);
app.get('/posts',get);



const PORT=process.env.PORT||7700;

app.listen(PORT,async ()=>{
    console.log(`Query server is running on port ${PORT}`);
     const res= await axios.get('http://localhost:4005/events');
    // console.log(res);
    for(let event of res.data){
        console.log("Processing event",event.type);
        handleEvent(event.type,event.data)
    }
})