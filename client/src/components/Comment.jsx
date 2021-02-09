import React,{useState} from 'react';
import {Form,Button} from 'semantic-ui-react';
import {useDispatch} from 'react-redux';
import {actions} from '../redux/Comments/comments.types';


const Comment = ({id}) => {
    const dispatch = useDispatch();
    const [comment,setComment]=useState('');

    const onSubmit =e=>{
        e.preventDefault();
        dispatch(actions.create_start({id,data:comment}))
        setComment('');
    };
    const onChange=e=>{
        setComment(e.target.value)
    }

    return (
        <Form onSubmit={onSubmit}>
            <label>Comment</label>
            <input value={comment} onChange={onChange}/>
            <Button fluid primary style={{marginTop:"5px"}}>Sumit</Button>
        </Form>
    )
}

export default Comment
