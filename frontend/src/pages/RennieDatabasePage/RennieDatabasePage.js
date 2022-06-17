import React, {useState} from 'react';
import DisplayPosts from "./Component/DisplayPosts/DisplayPosts";
import CreatePost from "./Component/CreatePost/CreatePost";
import Navbar from '../../components/Navbar/Navbar';


import axios from 'axios';

import { Container, Row, Col } from 'react';

function FileUpload() {
  
    const [file, setFile] = useState()
    const [posts, setPosts] = useState([]);

  function createPost(myPost) {
    let allPosts= [...posts, myPost];
    setPosts(allPosts);
}
  function handleChange(event) {setFile(event.target.files[0])}
  function handleSubmit(event) {event.preventDefault()

      }
    
    const url = 'http://localhost:3000/uploadFile/';

    const formData = new FormData(); 
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  
    return (
    <div className="FileUpload">
        <div className='App'>
            <Navbar />
            <Container>
                <Row>
                   <Col>
                    {" "}
                    <CreatePost createPost={createPost} />
                   </Col>
                   <Col>
                    {" "}
                    <DisplayPosts posts={posts} />
                   </Col>
                </Row>
            </Container>
        </div>
        <form onSubmit={handleSubmit}>
          <td>Image File Upload</td>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        <form onSubmit={handleSubmit}>
          <td>Poem File Upload</td>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        <form onSubmit={handleSubmit}>
          <td>Custom File Upload</td>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        <form onSubmit={handleSubmit}>
          <td>RENNIE CUSTOMER ASSESSMENT</td>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        
    </div>
  );
}
export default FileUpload;