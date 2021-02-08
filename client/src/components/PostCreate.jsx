import React from 'react'
import { Button, Checkbox, Form ,Segment} from 'semantic-ui-react'

const PostCreate = () => {
    return (
            <Segment>
                <h1>Create Post</h1>
                <Form>
                    <Form.Field>
                    <label>Title</label>
                    <textarea pla/>
                    </Form.Field>
                    
                    <Button fluid secondary type='submit'>Post</Button>
                </Form>
            </Segment>
    )
}

export default PostCreate
