import React, {useState} from 'react'
import { Button, Form ,Segment} from 'semantic-ui-react'
import {useDispatch} from 'react-redux';
import {actions} from '../redux/Posts/types'


const PostCreate = () => {
    const [post,createPost]=useState("")
    const dispatch = useDispatch();



    const onSubmit=(e)=>{
        e.preventDefault();
        dispatch(actions.create_start(post));
        createPost('')
    }
    const onChange=e=>{
        createPost(e.target.value)
    }
    


    return (
            <Segment>
                <h1>Create Post</h1>
                <Form onSubmit={onSubmit}>
                    <Form.Field>
                    <label>Title</label>
                    <textarea value={post} onChange={onChange}/>
                    </Form.Field>
                    
                    <Button type='submit' fluid secondary type='submit'>Post</Button>
                </Form>
            </Segment>
    )
}

export default PostCreate
