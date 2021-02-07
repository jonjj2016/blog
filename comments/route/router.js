const express=require('express');
const {get,create}=require('../controller/controller')

const router=express.Router();

router.route('/').get(get).post(create)



module.exports=router;