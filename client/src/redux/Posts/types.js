// const {simpleTypeGen} =require('myreduxtypes');
import {simpleTypeGen,autoTypeGen} from 'myreduxtypes';

export const [types,actions]=autoTypeGen('post');
// console.log(types);