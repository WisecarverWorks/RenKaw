// We will need useState
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; 

const CreateBulletin = (props) => {

    const [bulletinTitle, setbulletinTitle] = useState("");
    const [bulletinPost, setbulletinPost] = useState("");

    // Introduve a handleSubmit function
    function handleSubmit(e){
        e.preventDefault();
        let myBulletinPost = {
            bulletinTitle,
            bulletinPost
        }
        props.CreatePost(myBulletinPost)
    }
    // Return a div with our create post prop. Form data will be display
    return (
        <div className='form-box'>
        <Form onSubmit={handleSubmit}>
            <Form.Label>Bulletin Title</Form.Label>
            <Form.Control name='bulletinTitle' onChange={(e) => setbulletinTitle(e.target.value)} value={bulletinTitle}></Form.Control>
            <Form.Label name='bulletinPost'>Bulletin Post</Form.Label>
            <Form.Control as="textarea" rows={6} name='bulletinPost' onChange={(e) => setbulletinPost(e.target.value)} value={bulletinPost}></Form.Control>
            <Button type='submit'>Post</Button>
           </Form>
        </div>
    )
}   
// Export our createPost which will update our form
export default CreateBulletin;