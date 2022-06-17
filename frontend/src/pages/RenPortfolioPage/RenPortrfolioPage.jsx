import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useBullitienForm from "../../hooks/useBullitienForm";

import { VechaiProvider, Button } from "@vechaiui/react"


const RennieDatabase = () => {
  const { bullitienPost } = useContext(AuthContext);
  const defaultValues = {
    postname: "",
    text: "", 
  };
  const [formData, handleInputChange, handleSubmit] = useBullitienForm(
    defaultValues,
    bullitienPost
  );
 
  return (
    <div className="container" id="Bullitiendiv">
              <h1>Bullitien Board</h1>
      <p>This will post directly to your Users</p>
      <textarea draggable="true" type='text' onChange={[formData, handleInputChange]} onSubmit={handleSubmit} useState={" "}>Type a message to your customers here for a quick post</textarea>
      <VechaiProvider>
       <Button>Post</Button>
    ``</VechaiProvider>
        <form className="form" onSubmit={handleSubmit}>
            <label>Post Name{" "}<input type="textarea" name='postname' value={formData.postname} onChange={handleInputChange}/></label>
                
        </form>

        <form action="/action_page.php">
        <p style={{ fontSize: "12px" }}>
                NOTE: All additions will be uploaded to the backend and stored. When needed speak with your admin to recall all entries.
                When a page is created to store these values, this file will be updated.
            </p>
        <p style={{ fontSize: "12px" }}>
                NOTE: Click on the "Choose File" button to upload a file with your post:</p>
            <input type="file" id="myFile" name="filename"></input>
            <input type="submit"></input>
        </form>

    </div>
  
  );       
};

export default RennieDatabase;