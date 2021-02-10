const posts=require('../utils/util')
const {handleEvent}=require('../utils/util')
const get=(req,res)=>{
    res.status(200).json({status:true,data:posts})
};


const create=(req,res)=>{
    const {type,data}=req.body;

    handleEvent(type,data)

};

module.exports={
    create,
    get
}
