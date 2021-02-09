const express=require('express');
const {get,create}=require('../controllers/query.controllers')

const route=express.Router();

route.route('/posts').get(get);
route.route('/events').get(create);


module.exports=route;