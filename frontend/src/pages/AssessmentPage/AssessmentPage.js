import React  from 'react';
import useCustomForm from "../../hooks/useCustomForm";
import { Container, Row, Col } from 'react-bootstrap';
import CreatePost from '../../components/CreatePost/CreatePost';
// import Draggable from 'react-draggable';

const AssessmentPage = () => {
    const defaultValues = {
        questions: "",
        date: "",
    };
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        defaultValues
    );

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Assessment Page</h1>
                        
                            <form className="form" onSubmit={handleSubmit}>
                                <label>
                                    Date{" "}
                                    <input type="date" name="time" value={formData.time} onChange={handleInputChange} />
                                </label>
                            </form>    
                                <CreatePost />
                </Col>
                <Col>
                            <form>
                                <label>
                                    Questions{" "}
                                    <textarea Draggable='true' type="list" name="title" value={formData.time} onChange={handleInputChange} />
                                </label>
                      
                                <button type='submit' onClick={handleSubmit}>Post</button>   
                            </form>
                                      
                </Col>             
            </Row>
        </Container>
    );
};

export default AssessmentPage;
