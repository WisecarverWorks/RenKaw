// We will need useState
import React, { useState } from 'react';
import ( Form, Button ) from 'react-bootstrap'; 

const CreatePost = (props) => {

    const [postName, setPostName] = useState("");
    const [postBody, setPostBody] = useState("");

    // Introduve a handleSubmit function
    function handleSubmit(e){
        e.preventDefault();
        let myPost = {
            postName,
            postBody
        }
        props.CreatePost(myPost)
    }
    // Return a div with our create post prop. Form data will be display
    return (
        <div className='form-box'>
        <Form onSubmit={handleSubmit}>
            <Form.Label>Name</Form.Label>
            <Form.Control name='postName' onChange={(e) => setPostName(e.target.value)} value={postName}></Form.Control>
            <Form.Label for='postBody'>Post</Form.Label>
            <Form.Control as="text-area" rows={6} name='postBody' onChange={(e) => setPostBody(e.target.value)} value={postBody}></Form.Control>
            <Button type='submit'>Post</Button>
        </Form>
        </div>
    )
}   
// Export our createPost which will update our form
export default CreatePost;d