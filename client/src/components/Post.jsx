import React from 'react';
import {Card,List,} from 'semantic-ui-react';
import Comment from './Comment';
// import {useDispatch,useSelector} from 'react-redux'
// import {actions,types} from '../redux/Comments/comments.types'


const Post = ({post}) => {
   
    

    // const dispatch = useDispatch()
    // useEffect(() => {
    //     // dispatch({
    //     //     type:types.GET_START,
    //     //     id:post.id
    //     // })
    // }, [])
    
    // const comments=useSelector(state=>state.comments[post.id]);
    // // console.log(comments);
    return (
        <Card>
                <Card.Content>
                    <Card.Header>
                        {post.title}
                    </Card.Header>
                    <Card.Content>
                       {/* {comments.length?comments.length:"no"} comments */}
                    </Card.Content>
                    <List bulleted>
                        {
                            post.comments&&post.comments.map(item=><List.Item key={item.id}>{item.content}</List.Item>)
                        }
                    </List>
                   <Comment id={post.id}/>
                </Card.Content>
            </Card>
    )
}

export default Post
