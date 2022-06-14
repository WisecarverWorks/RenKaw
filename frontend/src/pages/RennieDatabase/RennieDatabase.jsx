import React, { useState } from "react";

import useCustomForm from "../../hooks/useCustomForm";
// import img from '/frontend/src/Imgs';
import FileUpload from "../../components/fileupload";
import { Link, NavLink } from "react-router-dom";


const RennieDatabase = () => {
  const defaultValues = useState({
    types: "",
    title: "",
    price: "",


  });
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
  );

  <NavLink /> 
  return (
    <div className="container">
      <h> Welcome Rennie</h>
        <h1>This Is Your Simple</h1>
        <h2>Upload Station</h2>
         <title>Rennie's Upload Center</title>
          <form className="form" onSubmit={handleSubmit}>
           <body>
            <b>Types:{" "}</b><input type="text" value={formData.username} onChange={handleInputChange}/>
             <b>Title:{" "}</b><input type="text" value={formData.firstName} onChange={handleInputChange}/>
              <b>Price:{" "}</b><input type="text" value={formData.lastName} onChange={handleInputChange} /> 
              <button>Sell!</button>  
           </body>      
          </form>
            <b>
             <form>
              <div>
                <FileUpload> 
                  
                </FileUpload>
              </div>
             </form>
            </b>
          <footer className="container">
            <b></b>
          </footer>
    </div>
  );
};

export default RennieDatabase;