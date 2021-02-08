import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';
import {Container} from 'semantic-ui-react'

const App = () => {
    return (
        <Container>
            <PostCreate/>
            <PostList/>
        </Container>
    )
}

export default App
