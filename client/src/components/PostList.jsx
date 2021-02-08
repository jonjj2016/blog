import React from 'react';
import {Segment,Card,Button,List,Form} from 'semantic-ui-react';
import Post from './Post';

const PostList = () => {
    return (
        <Card.Group>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Card.Group>
    )
}

export default PostList
