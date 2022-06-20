import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

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
            <Form.Label>Name</Form.Label>
            <Form.Control name='postName' onChange={(e) => setPostName(e.target.value)} value={postName}></Form.Control>
            <Form.Label for="postBody">Post</Form.Label>
            <Form.Control as="textarea" rows={2} name="postBody" onChange={(e) => setPostBody(e.target.value)} value={postBody}></Form.Control>
            <Button type="submit">Post!</Button>
        </Form>
        </div>
    )
}
// export our CreatePost prop to update form and post
export default CreatePost