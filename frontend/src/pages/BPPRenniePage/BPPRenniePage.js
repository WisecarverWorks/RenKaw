import { useState } from 'react';
import { Button, Row, Col, Container, Table, ThemeProvider } from 'react-bootstrap';
import useCustomForm from "../../hooks/useCustomForm";
import CreatePost from '../../components/CreatePost/CreatePost';
import DisplayPosts from '../../components/DisplayPosts/DisplayPosts';


const BPPRenniePage = () => {
    const defaultValues = {
        time: "",
        title: "",
        price: "",
    };
    const [posts, setPosts] = useState([]);
    function createPost(myPost) {
        let allPosts = [...posts, myPost];
        setPosts(allPosts);
    }
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        defaultValues
    );

    return (
        <div className="container">
          <Container>
 
            <Row>
             <Col>
              <Table>
                <th>Artwork Upload</th>
                <ul>
                 <body>
                   <form className="form" onSubmit={handleSubmit}>
                        <td>
                            Time{" "}
                            <input type="date" name="time" value={formData.time} onChange={handleInputChange} />
                        </td>
                        <td>
                            Title{" "}
                            <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
                        </td>
                        <td>
                            Price{" "}
                            <input type="text" name="time" value={formData.price} onChange={handleInputChange} />
                        </td>
                        <Button type='submit'>Upload</Button>
                        <CreatePost createPost={createPost} />
                    </form>
                 </body>
                </ul>
              </Table>     
             </Col>
             <Col>
              <Table>
                <th>Create Bulletin</th>
                <ul>
                 <body>
                    <form className="form" onSubmit={handleSubmit}>
                        <label>
                            Date{" "}
                            <input type="date" name="time" value={formData.date} onChange={handleInputChange} />
                        </label>
                        <ThemeProvider>
                         <label>
                            Bulletin{" "}
                            <textarea value={formData.bulletin} onChange={handleInputChange} />
                         </label>
                        </ThemeProvider>
                         <ThemeProvider>
                         <DisplayPosts posts={posts} />{" "}
                         <Button type='submit'>Upload</Button>
                        </ThemeProvider>

                    </form>                
                 </body>
               </ul>
              </Table>
             </Col>
            </Row>
             
          </Container>
        </div>
    );
};

export default BPPRenniePage;

