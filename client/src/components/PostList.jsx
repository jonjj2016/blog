import React from 'react';
import {Segment,Card,Button,List,Form} from 'semantic-ui-react';
import Post from './Post';
import {useDispatch,useSelector} from 'react-redux'


const PostList = () => {
    const {posts}=useSelector(state=>state.posts);
    const keys=Object.keys(posts);
    // console.log(keys);

    return (
        <Card.Group>
            {keys.map(key=>{
             return   <Post post={posts[key]} key={key}/>
            })}
        </Card.Group>
    )
}

export default PostList
