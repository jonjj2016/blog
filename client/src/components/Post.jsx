import React from 'react';
import {Card,List,} from 'semantic-ui-react';
import Comment from './Comment';
// import {useDispatch,useSelector} from 'react-redux'
// import {actions,types} from '../redux/Comments/comments.types'


const Post = ({post}) => {
   
    

    
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
                            post.comments&&post.comments.map(item=>{
                                let content;

                                if(item.status=="approved"){
                                    content=item.content
                                }else if(item.status=="rejected"){
                                    content="This comment has  been rejected"
                                }else {
                                    content="This comment is awaiting moderation"
                                }
                             return   <List.Item key={item.id}>
                                 {content}
                                {/* {item.status=="approved"?<span>{item.content}</span>:<span style={{color:"red"}}>{item.content}</span>} */}
                                </List.Item>
                            })
                        }
                    </List>
                   <Comment id={post.id}/>
                </Card.Content>
            </Card>
    )
}

export default Post
