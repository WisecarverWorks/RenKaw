import React, { useState } from "react";


const UploadFile = () => {
    const [files, setFiles] = useState("");
    //State for checcking file size
    const [fileSize, setFileSize] = useState("");
    // file upload message
    const [fileUploadProgress, setFileUploadProgress] = useState(false);
    // display response message
    const [fileUploadResponse, setFileUploadResponse] = useState(null);
    // base and url
    const  FILE_UPLOAD_BASE_ENDPOINT = "http://localhost:8000/api/ren";


    const uploadFileHandler = (event) => {
        setFiles(event.target.files);
        };

        const fileSubmitHandler = (event) => {
         event.preventDefault();
         setFileSize(true);
         setFileUploadProgress(true);
         setFileUploadResponse(null);

          const formData = new FormData();

          for (let i= 0; i < files.length; i++) {
              if (files[i].size > 1024){
                  setFileSize(false);
                  setFileUploadProgress(false);
                  setFileUploadResponse(null);
                  return;
              }

              formData.append(`files`, files[i])
          }

          const requestOptions = {
              method: 'POST',
              body: formData
          };
          fetch(FILE_UPLOAD_BASE_ENDPOINT+'/upload', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                // error response check
                if (!response.ok) {
                    //we need error message
                    const error = (data && data.message) || response.status;
                    setFileUploadResponse(data.message)
                    return Promise.reject(error);
                }

                console.log(data.message);
                setFileUploadResponse(data.message);
            })
            .catch(error => {
                console.error('Error while uploading file.', error);
            });
        setFileUploadProgress(false);
        };
    return(

     <form onSubmit={{fileSubmitHandler}}>
         <input type='file' multiple onChange={uploadFileHandler}/>
         <button type='submit'>Upload</button>
         {!fileSize && <p style={{color: 'red'}}>File Size Too Large.</p>}
         {fileUploadProgress && <p style={{color: 'red'}}>Uploading File(s)</p>}
        {fileUploadResponse!=null && <p style={{color:'green'}}>{fileUploadResponse}</p>}

     </form>
    );
}

export default UploadFile;