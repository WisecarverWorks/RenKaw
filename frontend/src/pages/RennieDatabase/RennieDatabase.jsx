import React, { useState } from "react";

import useCustomForm from "../../hooks/useCustomForm";

const RennieDatabase = () => {
  const defaultValues = useState({
    types: "",
    title: "",
    price: "",


  });
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
  );

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <body>
            <ul>
             <label> Types:{" "}</label>
                <input type="text" value={formData.username} onChange={handleInputChange}/>
             <label> Title:{" "}</label>
                <input type="text" value={formData.firstName} onChange={handleInputChange}/>
              <label> Price:{" "}</label>
                 <input type="text" value={formData.lastName} onChange={handleInputChange}/>
              <label> File:{" "}</label>
                <file-XMLHttpRequestUpload type='file'></file-XMLHttpRequestUpload>
            </ul>
            <hr></hr>
            <hr></hr>
        </body>
             <form>
                <ol>
                    <label>**Bullitien Board**</label>
                    <textarea type='text' value={formData.New} onChange={handleInputChange} />
                </ol>
             </form>
              <button>SELL!</button>
            <hr></hr>
            <hr></hr>
      </form>
    </div>
  );
};

export default RennieDatabase;