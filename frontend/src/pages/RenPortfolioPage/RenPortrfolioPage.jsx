import React, { useState } from "react";
import './RennieDatabase.css';
import useCustomForm from "../../hooks/useCustomForm";
// import img from '/frontend/src/Imgs';


const RennieDatabase = () => {
  const defaultValues = useState => {""}; 
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues, useState
  );


  return (
    <div className="container" >
        <div/>
        
         <div/>
          <div/>
           <div>
            <div>
             <div>
                    <div >
                      
                        <textarea draggable="true" type='text' onChange={[formData, handleInputChange]} onSubmit={handleSubmit} useState={" "}>Type a message to your customers here for a quick post</textarea>
                      
                    </div>
               </div>
              </div>
             </div>
            </div>
  );       
};

export default RennieDatabase;