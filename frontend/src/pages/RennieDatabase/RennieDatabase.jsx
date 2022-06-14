import React, {useState} from 'react';

import axios from 'axios';

function FileUpload() {

  const [file, setFile] = useState()

  function handleChange(event) {setFile(event.target.files[0])}
  function handleSubmit(event) {event.preventDefault()
    
    const url = 'http://localhost:3000/uploadFile/';

    const formData = new FormData(); 
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }
  return (
    <div className="FileUpload" anchor>
        <form onSubmit={handleSubmit}>
          <td>React File Upload</td>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        <form onSubmit={handleSubmit}>
          <td>React File Upload</td>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        <form onSubmit={handleSubmit}>
          <td>React File Upload</td>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        
    </div>
  );
}
export default FileUpload;