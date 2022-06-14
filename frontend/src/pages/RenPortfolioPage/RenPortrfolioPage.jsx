import React, { useState } from "react";
import './Rennie.css';
import useCustomForm from "../../hooks/useCustomForm";

import { VechaiProvider, Button } from "@vechaiui/react"


const RennieDatabase = () => {
  const defaultValues = useState => {""}; 
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues, useState
  );


  return (
    <div id="mydiv">
      <h1>Bullitien Board</h1>
      <p>This will post directly to your Users</p>
      <textarea draggable="true" type='text' onChange={[formData, handleInputChange]} onSubmit={handleSubmit} useState={" "}>Type a message to your customers here for a quick post</textarea>
      <VechaiProvider>
       <Button>Post</Button>
    ``</VechaiProvider>
    </div>
  
  );       
};

export default RennieDatabase;