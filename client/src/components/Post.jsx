import React from 'react';
import {Segment,Card,Button,List,Form} from 'semantic-ui-react';

const Post = () => {
    return (
        <Card>
                <Card.Content>
                    <Card.Header>
                        My Post
                    </Card.Header>
                    <Card.Content>
                        1 comment
                    </Card.Content>
                    <List bulleted>
                        
                        <List.Item>
                            Im a comment
                        </List.Item>
                    </List>
                    <Form>
                        <label>Comment</label>
                        <input/>
                        <Button>Sumit</Button>
                    </Form>
                </Card.Content>
            </Card>
    )
}

export default Post
