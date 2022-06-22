// we will need useState
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './CreatePost.css';
// We need a createposts prop

const CreatePost = (props) => {

    const [postName, setPostName] = useState('');
    const [postBody, setPostBody] = useState('');

    // introduce a handleSubmit function
    function handleSubmit(e){
        e.preventDefault();
        let myPost = {
            postName,
            postBody
        }
        props.createPost(myPost)
    }
    // we will return a div with our form creating a post
    return (
        <div className='form-box'>
        <Form onSubmit={handleSubmit}>
            <Form.Label>Title</Form.Label>
            <Form.Control name='postName' onChange={(e) => setPostName(e.target.value)} value={postName}></Form.Control>
            <Form.Label for="postBody">Bulletin / Assessment Message</Form.Label>
            <Form.Control as="textarea" rows={4} name="postBody" onChange={(e) => setPostBody(e.target.value)} value={postBody}></Form.Control>
            <input type='file'></input>ADD IMAGE
            <Button type="submit">Post!</Button>
        </Form>
        </div>
    )
}
// export our CreatePost prop to update form and post
export default CreatePost