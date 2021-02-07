const express=require('express');
const {get,post}=require('../controller/controller');


const router=express.Router();

router.route('/').get(get).post(post)



module.exports=router;