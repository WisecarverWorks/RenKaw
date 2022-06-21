import React from "react";
import './AdminPage.css';
import { MyEditor } from "../../components/myEditor/myEditor";
//Add the import after the other imports
import { PreviewModal } from './previewModal';

const AdminPage = () => {
    
    return (
        <div className='container'>
            <div class='row'>
                <div class='col-md-16'>
                    <div className="container">
                        <h1>ADMIN</h1>
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
            </div>
        </div>    
    )
}
export default AdminPage;