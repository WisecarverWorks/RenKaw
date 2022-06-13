import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import useCustomForm from '../../hooks/useCustomForm';

// We want Rennie to be able to uplaod her artwork to the database

const PostArtForm = (props) => {
    const { registerArt } = useContext(AuthContext);
     const defaultValues = {type: "",year: "",name: "",price: "",};
      const [formData, handleInputChange, handleSubmit] = useCustomForm(defaultValues,registerArt);
        console.log(PostArtForm);

        return (
            <div>
            <form className="form" onSubmit={handleSubmit}>
            <body>
            <ul>
              <label>
                Artwork Type:{" "}
                <input type="text" name="type" value={formData.type} onChange={handleInputChange}/>
              </label>
              <label>
                Year:{" "}
                <input type='date' name="date" value={formData.date} onChange={handleInputChange} />
              </label>
            </ul>
            <ul>
              <label>
                Name:{" "}
                <input type='text' name="name" value={formData.name} onChange={handleInputChange} />
              </label>
              <label>
                Price:{" "}
                <input type='integer' name="price" value={formData.price} onChange={handleInputChange} />
              </label>
            </ul>
               <h3 UploadFile> </h3>
            <ol>
              <label>
                Upload File:{" "}
                <input type= 'file' name='Upload' value={formData.upload} onChange={handleInputChange} />
                <input type='text'name='art'value={formData.artwork}onChange={handleInputChange} /> 
              </label>
            </ol>
              <p style={{ fontSize: "12px" }}>
                NOTE: Make sure you complete all needed inputs. 
              </p>
              <button type='submit'>Post!</button>
            </body>
      </    form>
      </    div>
    );  
};  
export default PostArtForm;