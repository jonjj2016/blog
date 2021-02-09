const express=require('express');
const cors=require('cors');
const axios=require('axios');


const app=express();
app.use(express.json());
app.use(cors());


app.post('/events',(req,res)=>{
   try {
 
    const event=req.body;
    axios.post('http://localhost:4000/events',event);
    axios.post('http://localhost:5000/events',event);
    // axios.post('http://localhost:6002/events',event);
    res.status(201).json({
        status:"OK"
    })
   } catch (error) {
       
   }
 
});

const PORT=process.env.PORT||4005

app.listen(PORT,()=>console.log(`Event-bus is running on port ${PORT}`))