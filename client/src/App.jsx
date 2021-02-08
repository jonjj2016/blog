import React,{useEffect} from 'react';
import 'semantic-ui-css/semantic.min.css';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';
import {Container} from 'semantic-ui-react';
import {actions} from './redux/Posts/types';
import {useDispatch} from 'react-redux'

const App = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(actions.get_start())
    },[])
    return (
            <Container>
                <PostCreate/>
                <PostList/>
            </Container>
    )
}

export default App
