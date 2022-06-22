import React, { useState } from "react";
import './AdminPage.css';
import { MyEditor } from "../../components/myEditor/myEditor";
//Add the import after the other imports
import { PreviewModal } from './previewModal';
import { Container, Button } from "react-bootstrap";


const AdminPage = () => {
    // const [post, setPosts] = useState([]);

    // function createPost(myPost) {
    //     let allPosts = [...posts, myPost];
    //     setPosts(allPosts);
    return (
        <div className='container'>
            <div class='row'>
                <div class='col-md-5.3'>
                    <div className="container">
                        <h3>ADMIN</h3>
                        <body>
                            <form >
                                <label for='Assessment-Title'>Assessment Title</label>
                                <input type="text" id="Assessment-Title" placeholder="Assessment" />
                                <MyEditor type="text" id="Assessment-Body" />
                                <PreviewModal />
                                <label for="Date-Time">Date-Time</label>
                                <input type="date" id="Date-Time"/>
                                <select  name="Asssessment-File">
                                    <option value='.pdf'>PDF</option>
                                    <option value='.png'>PNG</option>
                                    <option value='.txt'>TXT</option>
                                </select>
                                <input type="submit" value="Submit" onClick/>
                            </form>
                        </body>
                    </div>      
                </div>
                <div class='col-md-5.3'>
                    <div className="container">
                        <h2>ADMIN</h2>
                        <body>
                            <form >
                                <label for='Assessment-Title'>Bulletin Title</label>
                                <input type="text" id="Bulletin-Title" placeholder="Title" />
                                <MyEditor type="text" id="Bulletin-message" />
                                <PreviewModal />
                                <Container>
                                    <Button>
                                        <input type="date" id="Date-Time"/>
                                        <input type="submit" value="Submit" onClick/>
                                    </Button>
                                    <Button>
                                        <option value='.png'>PNG</option>
                                        <input type="submit" value="Submit" onClick/>
                                    </Button>
                                    <Button>
                                        <input type="submit" value="Submit" onClick/>
                                        <option value='.txt'>TXT</option>
                                    </Button>
                                    <Button>
                                        <option value='.pdf'>PDF</option>
                                        <input type="submit" value="Submit" onClick/>
                                    </Button>
                                </Container>
                            </form>
                        </body>
                    </div>     
            </div>
        </div>    
      </div>    
    )
}
// }
export default AdminPage;