const express=require('express');
const {get,create}=require('../controller/controller')

const router=express.Router();

router.route('/:postId/comments').get(get).post(create);



module.exports=router;