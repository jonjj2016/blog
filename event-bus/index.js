const express=require('express');
const cors=require('cors');
const axios=require('axios');


const app=express();
app.use(express.json());
app.use(cors());
const events=[];

app.post('/events',(req,res)=>{
   try {
 
    const event=req.body;
    events.push(event);

    axios.post('http://localhost:4000/events',event);
    axios.post('http://localhost:5000/events',event);
    axios.post('http://localhost:7700/events',event);
    axios.post('http://localhost:8800/events',event);
    res.status(201).json({
        status:"OK"
    })
   } catch (error) {
       
   };
   
});
app.get('/events',(req,res)=>res.send(events));

const PORT=process.env.PORT||4005

app.listen(PORT,()=>console.log(`Event-bus is running on port ${PORT}`))